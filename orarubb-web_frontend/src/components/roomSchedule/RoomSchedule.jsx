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
              <td>{item.class_day}</td>
              <td>
                {item.start_hour} - {item.end_hour}
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

export default RoomSchedule;
