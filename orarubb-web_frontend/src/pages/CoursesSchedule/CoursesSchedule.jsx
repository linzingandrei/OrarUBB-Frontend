import { useState } from "react";
import Layout from "../../components/layout/Layout";
import ProfessorSchedule from "../../components/professorSchedule/ProfessorSchedule";
import ProfessorScheduleGrafic from "../../components/professorSchedule/ProfessorScheduleGrafic";
import { useParams } from "react-router-dom";
import { useGetClassesForTeacherQuery } from "../../api/TeachersApi";
import { LoadingComponent } from "../../components/LoadingComponent";
import { useGetClassesForCourseQuery } from "../../api/CoursesApi";
import CourseSchedule from "../../components/courseSchedule/CourseSchedule";
import CourseScheduleGrafic from "../../components/courseSchedule/CourseScheduleGrafic";
import { NoDataComponent } from "../../components/NoDataComponent";

const CoursesSchedule = () => {
  const courseName = useParams().courseName;
  const courseCode = useParams().courseCode;

  const {
    data: scheduleDataForCourse,
    isLoading,
    isError,
  } = useGetClassesForCourseQuery({
    course_code: courseCode,
    language: "ro-RO",
  });

  const [view, setView] = useState("tabelar");

  const handleViewToggle = () => {
    setView((prevView) => (prevView === "tabelar" ? "grafic" : "tabelar"));
  };

  if (isLoading) {
    return (
      <div>
        <LoadingComponent />
      </div>
    );
  }

  if (isError) {
    return <NoDataComponent />;
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
            <CourseSchedule
              scheduleData={scheduleDataForCourse}
              course={courseName}
            />
          ) : (
            <CourseScheduleGrafic
              scheduleData={scheduleDataForCourse}
              course={courseName}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CoursesSchedule;
