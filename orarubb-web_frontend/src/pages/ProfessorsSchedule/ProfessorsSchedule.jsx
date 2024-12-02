import ProfessorSchedule from "../../components/professorSchedule/ProfessorSchedule";
import Layout from "../../components/layout/Layout";
import { useParams } from "react-router-dom";
import "./ProfessorsSchedule.scss";
import { useGetClassesForTeacherQuery } from "../../api/TeachersApi";

// const scheduleForProfANDREICAAnca = [
//   {
//     class_id: "0842c56a-7c4a-4331-a0c4-4e432940e83b",
//     class_day: "Luni",
//     start_hour: 8,
//     end_hour: 10,
//     frequency: 0,
//     room: "2/I",
//     year: "IE3",
//     formation: "931",
//     class_type: "Seminar",
//     course_name: "Algebra",
//   },
//   {
//     class_id: "0842c56a-7c4a-4331-a0c4-4e432940e83b",
//     class_day: "Luni",
//     start_hour: 8,
//     end_hour: 10,
//     frequency: 0,
//     room: "2/I",
//     year: "IE3",
//     formation: "931",
//     class_type: "Seminar",
//     course_name: "Algebra",
//   },
//   {
//     class_id: "0842c56a-7c4a-4331-a0c4-4e432940e83b",
//     class_day: "Luni",
//     start_hour: 8,
//     end_hour: 10,
//     frequency: 0,
//     room: "2/I",
//     year: "IE3",
//     formation: "931",
//     class_type: "Seminar",
//     course_name: "Algebra",
//   },
//   {
//     class_id: "0842c56a-7c4a-4331-a0c4-4e432940e83b",
//     class_day: "Luni",
//     start_hour: 8,
//     end_hour: 10,
//     frequency: 0,
//     room: "2/I",
//     year: "IE3",
//     formation: "931",
//     class_type: "Seminar",
//     course_name: "Algebra",
//   },
//   {
//     class_id: "0842c56a-7c4a-4331-a0c4-4e432940e83b",
//     class_day: "Luni",
//     start_hour: 8,
//     end_hour: 10,
//     frequency: 0,
//     room: "2/I",
//     year: "IE3",
//     formation: "931",
//     class_type: "Seminar",
//     course_name: "Algebra",
//   },
//   {
//     class_id: "0842c56a-7c4a-4331-a0c4-4e432940e83b",
//     class_day: "Luni",
//     start_hour: 8,
//     end_hour: 10,
//     frequency: 0,
//     room: "2/I",
//     year: "IE3",
//     formation: "931",
//     class_type: "Seminar",
//     course_name: "Algebra",
//   },
// ];

const ProfessorsSchedule = () => {
  const { teacherName, teacherId } = useParams();

  const {
    data: scheduleDataForTeacher,
    isLoading,
    isError,
  } = useGetClassesForTeacherQuery({
    teacher_id: teacherId,
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
      <div className="professors-schedule">
        <div className="schedule-professor">
          <ProfessorSchedule
            scheduleData={scheduleDataForTeacher}
            professor={teacherName}
          />
        </div>
      </div>
    </Layout>
  );
};

export default ProfessorsSchedule;
