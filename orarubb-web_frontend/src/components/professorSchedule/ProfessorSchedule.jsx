import "./ProfessorSchedule.scss";

const ProfessorSchedule = ({ scheduleData, professor }) => {
  console.log("Data", scheduleData);
  return (
    <div className="table-container-gt">
      <h2 className="professor-schedule-table-title">Orar {professor}</h2>
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
            <th>Disciplina</th>
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
                <a href={`/course/${item.courseInstanceCode}`} className="link">
                  {item.courseInstanceName}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfessorSchedule;
