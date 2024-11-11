import ProfessorSchedule from "../../components/professorSchedule/ProfessorSchedule";
import Layout from "../../components/layout/Layout";

import './ProfessorsSchedule.scss'

const scheduleForProfANDREICAAnca = [
    {
      class_id: "0842c56a-7c4a-4331-a0c4-4e432940e83b",
      class_day: "Luni",
      start_hour: 8,
      end_hour: 10,
      frequency: 0,
      room: "2/I",
      year: "IE3",
      formation: "931",
      class_type: "Seminar",
      course_name: "Algebra",
    },
    {
        class_id: "0842c56a-7c4a-4331-a0c4-4e432940e83b",
        class_day: "Luni",
        start_hour: 8,
        end_hour: 10,
        frequency: 0,
        room: "2/I",
        year: "IE3",
        formation: "931",
        class_type: "Seminar",
        course_name: "Algebra",
      },
      {
        class_id: "0842c56a-7c4a-4331-a0c4-4e432940e83b",
        class_day: "Luni",
        start_hour: 8,
        end_hour: 10,
        frequency: 0,
        room: "2/I",
        year: "IE3",
        formation: "931",
        class_type: "Seminar",
        course_name: "Algebra",
      },
      {
        class_id: "0842c56a-7c4a-4331-a0c4-4e432940e83b",
        class_day: "Luni",
        start_hour: 8,
        end_hour: 10,
        frequency: 0,
        room: "2/I",
        year: "IE3",
        formation: "931",
        class_type: "Seminar",
        course_name: "Algebra",
      },
      {
        class_id: "0842c56a-7c4a-4331-a0c4-4e432940e83b",
        class_day: "Luni",
        start_hour: 8,
        end_hour: 10,
        frequency: 0,
        room: "2/I",
        year: "IE3",
        formation: "931",
        class_type: "Seminar",
        course_name: "Algebra",
      },
      {
        class_id: "0842c56a-7c4a-4331-a0c4-4e432940e83b",
        class_day: "Luni",
        start_hour: 8,
        end_hour: 10,
        frequency: 0,
        room: "2/I",
        year: "IE3",
        formation: "931",
        class_type: "Seminar",
        course_name: "Algebra",
      },
  ];
  
const ProfessorsSchedule = () => {
    return (
        <Layout>
          <div className="professors-schedule">
              <div className="schedule-professor">
                  <ProfessorSchedule scheduleData={scheduleForProfANDREICAAnca} professor={"ANDREICA Anca"} />
              </div>
          </div>
        </Layout>
      );
}
      
export default ProfessorsSchedule;