import "./RoomSchedule.scss";

const RoomSchedule = ({ scheduleData, room }) => {
  return (
    <div className="room-schedule-table-container">
      <h2 className="room-schedule-table-title">Orar: Sala {room}</h2>
      <table className="room-schedule-table">
        <thead>
          <tr>
            <th>Ziua</th>
            <th>Orele</th>
            <th>Frecventa</th>
            <th>Formatia</th>
            <th>Tipul</th>
            <th>Disciplina</th>
            <th>Cadru didactic</th>
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((item, index) => (
            <tr key={index}>
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
              <td>{item.formation}</td>
              <td>{item.classType}</td>
              <td>
                <a href={`#${item.courseInstanceCode}`} className="link">
                  {item.courseInstanceName}
                </a>
              </td>
              <td>
                <a href={`#${item.teacher}`} className="link">
                  {item.teacher}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/*
"classId": "d821db2b-ad1a-5483-a9f5-3b0b6009f299",
        "classDay": "Joi",
        "startHour": 3,
        "endHour": 5,
        "frequency": 0,
        "room": "7/I",
        "formation": "MI3",
        "classType": "Curs",
        "courseInstanceCode": "MLR5015",
        "courseInstanceName": "Programare Web",
        "teacher": "Conf. BUFNEA Darius"
 */

export default RoomSchedule;
