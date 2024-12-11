import ProfessorSchedule from "../../components/professorSchedule/ProfessorSchedule";
import Layout from "../../components/layout/Layout";
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

  if (isLoading) {
    return <div>Loading teacher's schedule...</div>;
  }

  if (isError) {
    return <div>Error loading teacher's schedule</div>;
  }

  return (
    <Layout>
      <div>
        <div>
          <ProfessorSchedule
            scheduleData={scheduleDataForTeacher}
            professor={teacherCode}
          />
        </div>
      </div>
    </Layout>
  );
};

export default ProfessorsSchedule;
