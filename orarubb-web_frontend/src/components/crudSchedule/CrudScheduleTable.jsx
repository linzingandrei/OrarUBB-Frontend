import "./CrudScheduleTable.scss";

const CrudScheduleTable = ({ scheduleData, onEdit, onDelete }) => {
  return (
      <div className="crud-table-container">
        <h2 className="crud-table-title">Orarul meu</h2>
        <table className="crud-table">
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
              <tr key={item.classId || index}>
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
                  <a href={`/${item.room}`} className="link">
                    {item.room}
                  </a>
                </td>
                <td>{item.formation}</td>
                <td>{item.classType}</td>
                <td>
                  <a href={`/${item.courseInstanceCode}`} className="link">
                    {item.courseInstanceCode}
                  </a>
                  {/*
                  If you also want to show the full course name,
                  you can add `item.courseInstanceName` if desired:
                  <br />
                  <span>{item.courseInstanceName}</span>
                */}
                </td>
                <td>
                  <a href={`/${item.teacher}`} className="link">
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
