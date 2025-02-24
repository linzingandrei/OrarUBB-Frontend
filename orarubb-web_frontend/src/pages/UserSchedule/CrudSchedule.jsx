import { useNavigate } from "react-router-dom";
import "./CrudSchedule.scss";
import Layout from "../../components/layout/Layout";
import { useEffect, useState } from "react";
import CrudScheduleTable from "../../components/crudSchedule/CrudScheduleTable";
import { useAuth } from "../../utils/AuthContext.jsx";
import { useGetClassesForUserQuery, userClassesApi } from "../../api/UserClassesApi.js";
import { skipToken } from "@reduxjs/toolkit/query";
import { useDispatch } from "react-redux";

/**
 * Optional: define a dayOrder helper for sorting
 */
const dayOrder = {
  Luni: 1,
  Marti: 2,
  Miercuri: 3,
  Joi: 4,
  Vineri: 5,
  Sambata: 6,
  Duminica: 7,
};

/**
 * A helper function to re-sort the array
 * based on classDay first, then startHour.
 */
function sortScheduleData(data) {
  return [...data].sort((a, b) => {
    const dayComparison =
        dayOrder[a.classDay] - dayOrder[b.classDay];

    if (dayComparison === 0) {
      return a.startHour - b.startHour;
    }

    return dayComparison;
  });
}

const CrudSchedule = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userId, userName } = useAuth();

  // 1. Fetch your data once from RTK Query
  const { data: classesForUser } = useGetClassesForUserQuery(
      userId ? { userCode: userId, language: "ro-RO" } : skipToken
  );

  // 2. We do NOT store schedule in local state or localStorage.
  //    We read/mutate the RTK Query cache directly.

  // 3. We do need local state for the form, plus editingIndex & modal
  const [editingIndex, setEditingIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [form, setForm] = useState({
    classId: "",
    classDay: "",
    startHour: "",
    endHour: "",
    frequency: "",
    room: "",
    formation: "",
    classType: "",
    courseInstanceCode: "",
    courseInstanceName: "",
    teacher: "",
  });

  /**
   * 4. Any time we want to "add", "edit", or "delete"
   *    we call `dispatch(userClassesApi.util.updateQueryData(...))`.
   *    This modifies the RTK Query cache in place, so
   *    all components using the same query will see updated data.
   */

  const handleAddOrUpdate = () => {
    if (editingIndex === null) {
      // ADD
      dispatch(
          userClassesApi.util.updateQueryData(
              "getClassesForUser",
              { userCode: userId, language: "ro-RO" },
              (draft) => {
                // draft is a mutable array (immer-proxy)
                draft.push({
                  ...form,
                  classId: form.classId || crypto.randomUUID(),
                });

                // Re-sort after adding
                sortScheduleData(draft);
              }
          )
      );
    } else {
      // UPDATE
      dispatch(
          userClassesApi.util.updateQueryData(
              "getClassesForUser",
              { userCode: userId, language: "ro-RO" },
              (draft) => {
                // Replace the item at `editingIndex`
                draft[editingIndex] = {
                  ...form,
                  classId: draft[editingIndex].classId, // keep existing ID
                };

                // Re-sort after editing
                sortScheduleData(draft);
              }
          )
      );
    }

    resetForm();
    setIsModalOpen(false);
  };

  const handleEdit = (index, item) => {
    setEditingIndex(index);
    setForm(item);
    setIsModalOpen(true);
  };

  const handleDelete = (index) => {
    if (window.confirm("Ești sigur că vrei să ștergi această intrare?")) {
      dispatch(
          userClassesApi.util.updateQueryData(
              "getClassesForUser",
              { userCode: userId, language: "ro-RO" },
              (draft) => {
                draft.splice(index, 1);
              }
          )
      );
    }
  };

  const handleDeleteAll = () => {
    if (window.confirm("Ești sigur că vrei să ștergi toate datele?")) {
      dispatch(
          userClassesApi.util.updateQueryData(
              "getClassesForUser",
              { userCode: userId, language: "ro-RO" },
              (draft) => {
                draft.splice(0, draft.length);
              }
          )
      );
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setEditingIndex(null);
    setForm({
      classId: "",
      classDay: "",
      startHour: "",
      endHour: "",
      frequency: "",
      room: "",
      formation: "",
      classType: "",
      courseInstanceCode: "",
      courseInstanceName: "",
      teacher: "",
    });
  };

  // 5. If there's no data yet, show something
  //    (You can customize this as needed.)
  if (!classesForUser) {
    return (
        <Layout>
          <p>Loading or no data...</p>
        </Layout>
    );
  }

  return (
      <Layout>
        <div className="crud-schedule-page">
          <div className="crud-header-actions">
            <button className="back-button" onClick={() => navigate(-1)}>
              Înapoi
            </button>
            {/*<button className="add-button" onClick={() => setIsModalOpen(true)}>*/}
            {/*  Adaugă*/}
            {/*</button>*/}
          </div>

          <div className="crud-header">
            <h1>Gestionează Orarul tău, {userName}</h1>
          </div>

          {/*<button*/}
          {/*    className="delete-all-button"*/}
          {/*    onClick={handleDeleteAll}*/}
          {/*    disabled={classesForUser.length === 0}*/}
          {/*>*/}
          {/*  Șterge Tot*/}
          {/*</button>*/}

          {/*
          6. The table reads directly from classesForUser,
             which is the same array we modify in updateQueryData
        */}
          <CrudScheduleTable
              scheduleData={sortScheduleData(classesForUser)}
              onEdit={(index) => handleEdit(index, classesForUser[index])}
              onDelete={handleDelete}
          />

          {isModalOpen && (
              <div className="modal-overlay">
                <div className="modal">
                  <h2>{editingIndex !== null ? "Editează" : "Adaugă"} Orar</h2>
                  <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleAddOrUpdate();
                      }}
                  >
                    <div className="crud-form-group">
                      <label>Ziua</label>
                      <input
                          type="text"
                          name="classDay"
                          value={form.classDay}
                          onChange={handleInputChange}
                          required
                      />
                    </div>
                    <div className="crud-form-group">
                      <label>Ora Început</label>
                      <input
                          type="number"
                          name="startHour"
                          value={form.startHour}
                          onChange={handleInputChange}
                          required
                      />
                    </div>
                    <div className="crud-form-group">
                      <label>Ora Sfârșit</label>
                      <input
                          type="number"
                          name="endHour"
                          value={form.endHour}
                          onChange={handleInputChange}
                          required
                      />
                    </div>
                    <div className="crud-form-group">
                      <label>Frecvență (0 = săptămânal)</label>
                      <input
                          type="number"
                          name="frequency"
                          value={form.frequency}
                          onChange={handleInputChange}
                      />
                    </div>
                    <div className="crud-form-group">
                      <label>Sală</label>
                      <input
                          type="text"
                          name="room"
                          value={form.room}
                          onChange={handleInputChange}
                          required
                      />
                    </div>
                    <div className="crud-form-group">
                      <label>Formația</label>
                      <input
                          type="text"
                          name="formation"
                          value={form.formation}
                          onChange={handleInputChange}
                      />
                    </div>
                    <div className="crud-form-group">
                      <label>Tip Curs</label>
                      <input
                          type="text"
                          name="classType"
                          value={form.classType}
                          onChange={handleInputChange}
                          required
                      />
                    </div>
                    <div className="crud-form-group">
                      <label>Cod Curs</label>
                      <input
                          type="text"
                          name="courseInstanceCode"
                          value={form.courseInstanceCode}
                          onChange={handleInputChange}
                          required
                      />
                    </div>
                    <div className="crud-form-group">
                      <label>Nume Curs</label>
                      <input
                          type="text"
                          name="courseInstanceName"
                          value={form.courseInstanceName}
                          onChange={handleInputChange}
                      />
                    </div>
                    <div className="crud-form-group">
                      <label>Profesor</label>
                      <input
                          type="text"
                          name="teacher"
                          value={form.teacher}
                          onChange={handleInputChange}
                          required
                      />
                    </div>

                    <button type="submit" className="submit-button">
                      {editingIndex !== null ? "Actualizează" : "Adaugă"}
                    </button>
                    <button
                        type="button"
                        className="cancel-button"
                        onClick={() => {
                          resetForm();
                          setIsModalOpen(false);
                        }}
                    >
                      Anulează
                    </button>
                  </form>
                </div>
              </div>
          )}
        </div>
      </Layout>
  );
};

export default CrudSchedule;
