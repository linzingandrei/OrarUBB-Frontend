import { NoDataComponent } from "../NoDataComponent";
import "../professorSchedule/ProfessorSchedule.scss";

const CourseSchedule = ({ scheduleData, course }) => {
  console.log("Data", scheduleData);
  return (
    <div className="professor-schedule-table-container">
      <h2 className="professor-schedule-table-title">
        Orar {scheduleData[0].courseInstanceName}
      </h2>
      {scheduleData.length === 0 ? (
        <NoDataComponent />
      ) : (
        <table className="professor-schedule-table">
          <thead>
            <tr>
              <th>Ziua</th>
              <th>Orele</th>
              <th>Frecventa</th>
              <th>Sala</th>
              {/* <th>Anul</th> */}
              <th>Formatia</th>
              <th>Tipul</th>
              <th>Cadrul didactic</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((item, index) => (
              <tr key={item.classId}>
                <td>{item.classDay}</td>
                <td>
                  {item.startHour} - {item.endHour}
                </td>
                <td>
                  {item.frequency === 0
                    ? "Săptămânal"
                    : item.frequency === 1
                    ? "Săptămâna impară"
                    : "Săptămâna pară"}
                </td>
                <td>
                  <a href={`#${item.room}`} className="link">
                    {item.room}
                  </a>
                </td>
                {/* <td>
                <a href={`#${item.formation}`} className="link">
                  {item.formation}
                </a>
              </td> */}
                <td>{item.formation}</td>
                <td>{item.classType}</td>
                <td>
                  <a href={`/teacher/${item.teacherCode}`} className="link">
                    {item.teacher}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CourseSchedule;
