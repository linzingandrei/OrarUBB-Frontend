import { useNavigate } from "react-router-dom";
import "./UserSchedule.scss";
import Layout from "../../components/layout/Layout";
import { useState } from "react";
import GroupsScheduleTabelar from "../../components/groupsSchedule/GroupsScheduleTabelar";
import GroupsScheduleGrafic from "../../components/groupsSchedule/GroupsScheduleGrafic";

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
];

const schedules = [
  {group: 931, scheduleData: initialSchedule}
];

const UserSchedule = () => {
  const navigate = useNavigate();
  const [view, setView] = useState('tabelar');

  const handleViewToggle = () => {
      setView((prevView) => (prevView === 'tabelar' ? 'grafic' : 'tabelar'));
  };

  return (
    <Layout>
            <div className="page-container">
                <div className="view-toggle">
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={view === 'grafic'}
                            onChange={handleViewToggle}
                        />
                        <span className="slider"></span>
                    </label>
                    <p>{view === 'tabelar' ? 'Format Tabelar' : 'Format Grafic'}</p>
                </div>
                <button
                    className="modify-schedule-button"
                    onClick={() => navigate("/crud-schedule")
                    }
                >
                  Modifică Orar
                </button>
                {schedules?.length > 0 ? (
                  schedules.map((s) =>
                    view === "tabelar" ? (
                      <GroupsScheduleTabelar
                        key={s.group}
                        scheduleData={s.scheduleData}
                        group={s.group}
                      />
                    ) : (
                      <GroupsScheduleGrafic
                        key={s.group}
                        scheduleData={s.scheduleData}
                        group={s.group}
                      />
                    )
                  )
                ) : (
                  <p>No schedule available.</p>
                )}
                </div>
        </Layout>
  );
};

export default UserSchedule;
