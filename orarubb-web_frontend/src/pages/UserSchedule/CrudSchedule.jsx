import { useNavigate } from "react-router-dom";
import "./CrudSchedule.scss";
import Layout from "../../components/layout/Layout";
import { useState } from "react";
import CrudScheduleTable from "../../components/crudSchedule/CrudScheduleTable";
import {useAuth} from "../../utils/AuthContext.jsx";
import {useEffect} from "react";
import {useGetClassesForUserQuery} from "../../api/ClassesApi.js";

const CrudSchedule = () => {
  const {isAuthenticated, userId,  userName, instance, accounts} = useAuth();
  const navigate = useNavigate();
  const [schedule, setSchedule] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    class_day: "",
    start_hour: "",
    end_hour: "",
    room: "",
    class_type: "",
    course_instance_code: "",
    teacher: "",
  });

  const {
    data: classesForUser,
  } = useGetClassesForUserQuery({userCode: userId, language: "ro-RO"});

  useEffect(() => {
    if (schedule && schedule.length > 0) {
      setSchedule(classesForUser)
      console.log(classesForUser)
    }
  }, [schedule, classesForUser]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const resetForm = () => {
    setEditingIndex(null);
    setForm({
      class_day: "",
      start_hour: "",
      end_hour: "",
      room: "",
      class_type: "",
      course_instance_code: "",
      teacher: "",
    });
  };

  const handleAddOrUpdate = () => {
    if (editingIndex !== null) {
      const updatedSchedule = [...schedule];
      updatedSchedule[editingIndex] = { ...form, class_id: schedule[editingIndex].class_id };
      setSchedule(updatedSchedule);
    } else {
      setSchedule([
        ...schedule,
        { ...form, class_id: crypto.randomUUID() },
      ]);
    }
    resetForm();
    setIsModalOpen(false);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setForm(schedule[index]);
    setIsModalOpen(true);
  };

  const handleDelete = (index) => {
    const confirmDelete = window.confirm("Ești sigur că vrei să ștergi această intrare?");
    if (confirmDelete) {
      const updatedSchedule = schedule.filter((_, i) => i !== index);
      setSchedule(updatedSchedule);
    }
  };

  const handleDeleteAll = () => {
    const confirmDelete = window.confirm("Ești sigur că vrei să ștergi toate datele?");
    if (confirmDelete) {
      setSchedule([]);
    }
  };


  return (
    <Layout>
      <div className="crud-schedule-page">
        <div className="crud-header-actions">
          <button className="back-button" onClick={() => navigate(-1)}>
              Înapoi
          </button>
          <button className="add-button" onClick={() => setIsModalOpen(true)}>
            Adaugă
        </button>
        </div>
        <div className="crud-header">
          <h1>Gestionează Orarul tau, {userName}</h1>
        </div>
        <button
            className="delete-all-button"
            onClick={handleDeleteAll}
            disabled={schedule.length === 0}
          >
            Șterge Tot
        </button>
        <CrudScheduleTable
        scheduleData={schedule}
        onEdit={handleEdit}
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
                    name="class_day"
                    value={form.class_day}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="crud-form-group">
                  <label>Ora Început</label>
                  <input
                    type="number"
                    name="start_hour"
                    value={form.start_hour}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="crud-form-group">
                  <label>Ora Sfârșit</label>
                  <input
                    type="number"
                    name="end_hour"
                    value={form.end_hour}
                    onChange={handleInputChange}
                    required
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
                  <label>Tip Curs</label>
                  <input
                    type="text"
                    name="class_type"
                    value={form.class_type}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="crud-form-group">
                  <label>Cod Curs</label>
                  <input
                    type="text"
                    name="course_instance_code"
                    value={form.course_instance_code}
                    onChange={handleInputChange}
                    required
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
