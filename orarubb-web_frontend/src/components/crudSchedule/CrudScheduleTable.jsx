import "./CrudScheduleTable.scss";

const CrudScheduleTable = ({ scheduleData, onEdit, onDelete }) => {
  return (
    <div className="table-container">
      <h2 className="table-title">Orarul meu</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Ziua</th>
            <th>Orele</th>
            <th>Frecvența</th>
            <th>Sala</th>
            <th>Formația</th>
            <th>Tipul</th>
            <th>Disciplina</th>
            <th>Cadrul Didactic</th>
            <th>Acțiuni</th>
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
              <td>
                <a href={`#${item.room}`} className="link">
                  {item.room}
                </a>
              </td>
              <td>{item.formation}</td>
              <td>{item.class_type}</td>
              <td>
                <a href={`#${item.course_instance_code}`} className="link">
                  {item.course_instance_code}
                </a>
              </td>
              <td>
                <a href={`#${item.teacher}`} className="link">
                  {item.teacher}
                </a>
              </td>
              <td>
                <button
                  className="edit-button"
                  onClick={() => onEdit(index)}
                >
                  Editează
                </button>
                <button
                  className="delete-button"
                  onClick={() => onDelete(index)}
                >
                  Șterge
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrudScheduleTable;
