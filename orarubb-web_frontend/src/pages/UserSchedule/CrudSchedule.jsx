import { useNavigate } from "react-router-dom";
import "./CrudSchedule.scss";
import Layout from "../../components/layout/Layout";
import { useRef, useState } from "react";
import CrudScheduleTable from "../../components/crudSchedule/CrudScheduleTable";

const initialSchedule = [
  {
    class_id: "0842c56a-7c4a-4331-a0c4-4e432940e83b",
    class_day: "Luni",
    start_hour: 8,
    end_hour: 10,
    frequency: 0,
    room: "2/I",
    formation: "931",
    class_type: "Seminar",
    course_instance_code: "MLM0009",
    teacher: "Lect. Darabant Sergiu-Adrian",
},
{
    class_id: "0842c56a-7c4a-4331-a0c4-4e432940e83b",
    class_day: "Luni",
    start_hour: 8,
    end_hour: 10,
    frequency: 0,
    room: "2/I",
    formation: "931",
    class_type: "Seminar",
    course_instance_code: "MLM0009",
    teacher: "Lect. Darabant Sergiu-Adrian",
},
{
    class_id: "0842c56a-7c4a-4331-a0c4-4e432940e83b",
    class_day: "Luni",
    start_hour: 8,
    end_hour: 10,
    frequency: 0,
    room: "2/I",
    formation: "931",
    class_type: "Seminar",
    course_instance_code: "MLM0009",
    teacher: "Lect. Darabant Sergiu-Adrian",
},
{
  class_id: "0842c56a-7c4a-4331-a0c4-4e432940e83b",
  class_day: "Luni",
  start_hour: 8,
  end_hour: 10,
  frequency: 0,
  room: "2/I",
  formation: "931",
  class_type: "Seminar",
  course_instance_code: "MLM0009",
  teacher: "Lect. Darabant Sergiu-Adrian",
},
{
  class_id: "0842c56a-7c4a-4331-a0c4-4e432940e83b",
  class_day: "Luni",
  start_hour: 8,
  end_hour: 10,
  frequency: 0,
  room: "2/I",
  formation: "931",
  class_type: "Seminar",
  course_instance_code: "MLM0009",
  teacher: "Lect. Darabant Sergiu-Adrian",
},
{
  class_id: "0842c56a-7c4a-4331-a0c4-4e432940e83b",
  class_day: "Luni",
  start_hour: 8,
  end_hour: 10,
  frequency: 0,
  room: "2/I",
  formation: "931",
  class_type: "Seminar",
  course_instance_code: "MLM0009",
  teacher: "Lect. Darabant Sergiu-Adrian",
},
{
  class_id: "0842c56a-7c4a-4331-a0c4-4e432940e83b",
  class_day: "Luni",
  start_hour: 8,
  end_hour: 10,
  frequency: 0,
  room: "2/I",
  formation: "931",
  class_type: "Seminar",
  course_instance_code: "MLM0009",
  teacher: "Lect. Darabant Sergiu-Adrian",
},
{
  class_id: "0842c56a-7c4a-4331-a0c4-4e432940e83b",
  class_day: "Luni",
  start_hour: 8,
  end_hour: 10,
  frequency: 0,
  room: "2/I",
  formation: "931",
  class_type: "Seminar",
  course_instance_code: "MLM0009",
  teacher: "Lect. Darabant Sergiu-Adrian",
},
{
  class_id: "0842c56a-7c4a-4331-a0c4-4e432940e83b",
  class_day: "Luni",
  start_hour: 8,
  end_hour: 10,
  frequency: 0,
  room: "2/I",
  formation: "931",
  class_type: "Seminar",
  course_instance_code: "MLM0009",
  teacher: "Lect. Darabant Sergiu-Adrian",
},
];

const CrudSchedule = () => {
  const navigate = useNavigate();
  const [schedule, setSchedule] = useState(initialSchedule);
  const [editingIndex, setEditingIndex] = useState(null);
  const [form, setForm] = useState({
    class_day: "",
    start_hour: "",
    end_hour: "",
    room: "",
    class_type: "",
    course_instance_code: "",
    teacher: "",
  });

  const formRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
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
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setForm(schedule[index]);

    scrollToForm();
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

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
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

  return (
    <Layout>
      <div className="crud-schedule-page">
        <div className="header-actions">
          <button className="back-button" onClick={() => navigate(-1)}>
              Înapoi
          </button>
          <button className="add-button" onClick={scrollToForm}>
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
        />
        <div ref={formRef} className="form-container">
          <h2>{editingIndex !== null ? "Editează" : "Adaugă"} Orar</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddOrUpdate();
            }}
          >
            <div className="form-group">
              <label>Ziua</label>
              <input
                type="text"
                name="class_day"
                value={form.class_day}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Ora Început</label>
              <input
                type="number"
                name="start_hour"
                value={form.start_hour}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Ora Sfârșit</label>
              <input
                type="number"
                name="end_hour"
                value={form.end_hour}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Sală</label>
              <input
                type="text"
                name="room"
                value={form.room}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Tip Curs</label>
              <input
                type="text"
                name="class_type"
                value={form.class_type}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Cod Curs</label>
              <input
                type="text"
                name="course_instance_code"
                value={form.course_instance_code}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
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
              onClick={resetForm}
            >
              Anulează
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CrudSchedule;
