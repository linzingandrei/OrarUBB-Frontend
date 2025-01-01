import { useNavigate } from "react-router-dom";
import "./CrudSchedule.scss";
import Layout from "../../components/layout/Layout";
import { useState, useEffect } from "react";
import CrudScheduleTable from "../../components/crudSchedule/CrudScheduleTable";
import getScheduleService from "../../services/personalScheduleService";

// const initialSchedule = [
  // {
    // class_id: "0842c56a-7c4a-4331-a0c4-4e432940e83b",
    // class_day: "Luni",
    // start_hour: 8,
    // end_hour: 10,
    // frequency: 0,
    // room: "2/I",
    // formation: "931",
    // class_type: "Seminar",
    // course_instance_code: "MLM0009",
    // teacher: "Lect. Darabant Sergiu-Adrian",
// },
// {
    // class_id: "0842c56a-7c4a-4331-a0c4-4e432940e83b",
    // class_day: "Luni",
    // start_hour: 8,
    // end_hour: 10,
    // frequency: 0,
    // room: "2/I",
    // formation: "931",
    // class_type: "Seminar",
    // course_instance_code: "MLM0009",
    // teacher: "Lect. Darabant Sergiu-Adrian",
// },
// {
    // class_id: "0842c56a-7c4a-4331-a0c4-4e432940e83b",
    // class_day: "Luni",
    // start_hour: 8,
    // end_hour: 10,
    // frequency: 0,
    // room: "2/I",
    // formation: "931",
    // class_type: "Seminar",
    // course_instance_code: "MLM0009",
    // teacher: "Lect. Darabant Sergiu-Adrian",
// },
// {
  // class_id: "0842c56a-7c4a-4331-a0c4-4e432940e83b",
  // class_day: "Luni",
  // start_hour: 8,
  // end_hour: 10,
  // frequency: 0,
  // room: "2/I",
  // formation: "931",
  // class_type: "Seminar",
  // course_instance_code: "MLM0009",
  // teacher: "Lect. Darabant Sergiu-Adrian",
// },

// ];
// console.log("AICI: ", JSON.parse(localStorage.getItem("user"))["unique_code"]);

const CrudSchedule = () => {
  const initialSchedule = getScheduleService(JSON.parse(localStorage.getItem("user"))["unique_code"]);
  const unique_code = JSON.parse(localStorage.getItem("user"))["unique_code"]; 
  const navigate = useNavigate();
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    setSchedule(initialSchedule);
  }, [initialSchedule]);

  // console.log("SCHEDULE: ", initialSchedule)
  // console.log("SCHEDULE 2: ", schedule)
  const [editingIndex, setEditingIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    classDay: "",
    startTime: "",
    endTime: "",
    roomName: "",
    classType: "",
    courseInstanceName: "",
    teacherName: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log("HEREEEEEEEE: ", name, value)
    setForm({ ...form, [name]: value });
    // console.log("FORM", form)
  };

  const resetForm = () => {
    setEditingIndex(null);
    setForm({
      classDay: "",
      startTime: "",
      endTime: "",
      roomName: "",
      classType: "",
      courseInstanceName: "",
      teacherName: "",
    });
  };

  const handleAddOrUpdate = () => {
    if (editingIndex !== null) {
      // const updatedSchedule = [...schedule];
      // updatedSchedule[editingIndex] = { ...form, class_id: schedule[editingIndex].class_id };
      // setSchedule(updatedSchedule);
      handleEditingOfSchedule();
    } else {
      // setSchedule([
        // ...schedule,
        // { ...form, class_id: crypto.randomUUID() },
      // ]);
      handleAdditionOfSchedule();
    }
    resetForm();
    setIsModalOpen(false);
  };

  const handleEditingOfSchedule = () => {
    console.log("FORM: ", form);
    fetch(`http://192.168.0.109:8080/my-account/${unique_code}/personal_schedule`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
      .then((response) => response.json())
      .then((data) => {
        var index = -1;

        for (var i = 0; i < initialSchedule.length; i++) {
          if (initialSchedule[i].scheduleId === data.scheduleId) {
            index = i;
          }
        }

        console.log("INDEX: ", index)

        if (index !== -1) {
          setSchedule((prevSchedule) => {
          const updatedSchedule = prevSchedule.map((item, i) => {
            if (i === index) {
              return { ...item, ...data };
            }
            return item;
          });

          console.log("Updated schedule:", updatedSchedule);
          return updatedSchedule;
        });

        } else {
          console.warn("Schedule not found in initialSchedule for update");
        }
      })
      .catch((error) => {
        console.error("Error updating schedule:", error);
      });
  }

  const handleAdditionOfSchedule = () => {
    fetch(`http://localhost:8080/my-account/${unique_code}/personal_schedule`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
      .then((response) => response.json())
      .then((data) => setSchedule([...schedule, data]))
      .catch((error) => {
        console.error("Error adding schedule:", error);
      });
  }  

  const handleEdit = (index) => {
    setEditingIndex(index);
    console.log("HERE: ", schedule[index]);
    setForm(schedule[index]);
    setIsModalOpen(true);
  };

  const handleDelete = (index) => {
    const confirmDelete = window.confirm("Ești sigur că vrei să ștergi această intrare?");
    if (confirmDelete) {
      var schedule_to_delete = schedule[index];
      // console.log(unique_code, schedule_to_delete);
      fetch(`http://localhost:8080/my-account/${unique_code}/personal_schedule/${schedule_to_delete.scheduleId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Failed to delete');
          }
        })
        .then((data) => {
          console.log(data);
          setSchedule(data);
        })
        .catch((error) => {
          console.error("Error deleting schedule:", error);
        });
      // const updatedSchedule = schedule.filter((_, i) => i !== index);
      // setSchedule(updatedSchedule);
    }
  };

  const handleDeleteAll = () => {
    const confirmDelete = window.confirm("Ești sigur că vrei să ștergi toate datele?");
    if (confirmDelete) {
      fetch(`http://localhost:8080/my-account/${unique_code}/personal_schedule`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Failed to delete');
          }
        })
        .then(() => {
          // console.log(data);
          setSchedule([]);
        })
        .catch((error) => {
          console.error("Error deleting schedule:", error);
        });
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
          <h1>Gestionează Orarul</h1>
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
        modifiable={true}
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
                  />
                </div>
                <div className="crud-form-group">
                  <label>Ora Început</label>
                  <input
                    type="time"
                    name="startTime"
                    min="05:00"
                    max="23:00"
                    value={form.startTime}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="crud-form-group">
                  <label>Ora Sfârșit</label>
                  <input
                    type="time"
                    name="endTime"
                    min="05:00"
                    max="23:00"
                    value={form.endTime}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="crud-form-group">
                  <label>Sală</label>
                  <input
                    type="text"
                    name="roomName"
                    value={form.roomName}
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
                  />
                </div>
                <div className="crud-form-group">
                  <label>Cod Curs</label>
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
                    name="teacherName"
                    value={form.teacherName}
                    onChange={handleInputChange}
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
