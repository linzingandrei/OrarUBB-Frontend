import './ProfessorSchedule.scss'

const ProfessorSchedule = ({ scheduleData, professor }) => {
    return (
      <div className="table-container">
        <h2 className="table-title">Orar Prof. {professor}</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Ziua</th>
              <th>Orele</th>
              <th>Frecventa</th>
              <th>Sala</th>
              <th>Anul</th>
              <th>Formatia</th>
              <th>Tipul</th>
              <th>Disciplina</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((item, index) => (
              <tr key={index}> {/*this key has to be modified after working with real data to be unique*/}
                <td>{item.class_day}</td>
                <td>{item.start_hour} - {item.end_hour}</td>
                <td>{item.frequency === 0 ? "Săptămânal" : item.frequency === 1 ? "Săptămâna impară" : "Săptămâna pară"}</td>
                <td>
                  <a href={`#${item.room}`} className="link">
                    {item.room}
                  </a>
                </td>
                <td>
                  <a href={`#${item.year}`} className="link">
                    {item.year}
                  </a>
                </td>
                <td>{item.formation}</td>
                <td>{item.class_type}</td>
                <td>
                  <a href={`#${item.course_name}`} className="link">
                    {item.course_name}
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