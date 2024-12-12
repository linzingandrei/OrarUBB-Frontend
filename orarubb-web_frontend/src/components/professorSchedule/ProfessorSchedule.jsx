import './ProfessorSchedule.scss';

const ProfessorSchedule = ({ scheduleData, professor }) => {
  return (
    <div className="professor-schedule-table-container">
      <h2 className="table-title">
        <span className="orar">Orar Prof.</span>
        <span className="professor-name">{professor}</span>
      </h2>

      <table className="table-profesori">
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
            <tr key={index}>
              <td data-label="Ziua">{item.class_day}</td>
              <td data-label="Orele">{item.start_hour} - {item.end_hour}</td>
              <td data-label="Frecventa">
                {item.frequency === 0
                  ? "Săptămânal"
                  : item.frequency === 1
                  ? "Săptămâna impară"
                  : "Săptămâna pară"}
              </td>
              <td data-label="Sala">
                <a href={`#${item.room}`} className="link">
                  {item.room}
                </a>
              </td>
              <td data-label="Anul">
                <a href={`#${item.year}`} className="link">
                  {item.year}
                </a>
              </td>
              <td data-label="Formatia">{item.formation}</td>
              <td data-label="Tipul">{item.class_type}</td>
              <td data-label="Disciplina">
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
