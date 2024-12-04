import "./RoomSchedule.scss";

const RoomSchedule = ({ scheduleData, room }) => {
  return (
    <div className="room-schedule-table-container">
      <h2 className="table-title">Orar: Sala {room}</h2>
      <table className="table">
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
              <td>{item.class_type}</td>
              <td>
                <a href={`#${item.course_name}`} className="link">
                  {item.course_name}
                </a>
              </td>
              <td>
                <a href={`#${item.professor}`} className="link">
                  {item.professor}
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
