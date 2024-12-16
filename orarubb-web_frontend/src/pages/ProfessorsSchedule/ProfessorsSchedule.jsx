import { useState } from "react";
import Layout from "../../components/layout/Layout";
import ProfessorSchedule from "../../components/professorSchedule/ProfessorSchedule";
import ProfessorScheduleGrafic from "../../components/professorSchedule/ProfessorScheduleGrafic";
import { useParams } from "react-router-dom";
import { useGetClassesForTeacherQuery } from "../../api/TeachersApi";

const ProfessorsSchedule = () => {
  const teacherCode = useParams().teacherCode;

  const {
    data: scheduleDataForTeacher,
    isLoading,
    isError,
  } = useGetClassesForTeacherQuery({
    teacher_code: teacherCode,
    language: "ro-RO",
  });

  const [view, setView] = useState("tabelar");

  const handleViewToggle = () => {
    setView((prevView) => (prevView === "tabelar" ? "grafic" : "tabelar"));
  };

  if (isLoading) {
    return <div>Loading teacher's schedule...</div>;
  }

  if (isError) {
    return <div>Error loading teacher's schedule</div>;
  }

  return (
    <Layout>
      <div className="page-container-gt">
        <div className="view-toggle">
          <label className="switch">
            <input
              type="checkbox"
              checked={view === "grafic"}
              onChange={handleViewToggle}
            />
            <span className="slider"></span>
          </label>
          <p>{view === "tabelar" ? "Format Tabelar" : "Format Grafic"}</p>
        </div>

        <div>
          {view === "tabelar" ? (
            <ProfessorSchedule
            scheduleData={scheduleDataForTeacher}
            professor={teacherCode}
          />
          ) : (
            <ProfessorScheduleGrafic scheduleData={scheduleDataForTeacher}
            professor={teacherCode}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProfessorsSchedule;
