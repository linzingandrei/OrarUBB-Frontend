import "./CrudScheduleTable.scss";

const CrudScheduleTable = ({ scheduleData, onEdit, onDelete, modifiable }) => {
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
            { modifiable == true && <th>Acțiuni</th> }
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((item, index) => (
            <tr key={index}>
              { item.classDay != null &&
                <td>{item.classDay}</td>
              }

              { item.startTime != null && item.endTime == null && item.endTime.substring(0, 5) != "00:00" && item.startTime.substring(0, 5) != "00:00" &&
                <td>
                  {item.startTime.substring(0, 5)}
                </td>
              }
              { item.startTime == null && item.endTime != null && item.endTime.substring(0, 5) != "00:00" && item.startTime.substring(0, 5) != "00:00" &&
                <td>
                  {item.endTime.substring(0, 5)}
                </td>
              }
              { item.startTime != null && item.endTime != null && item.endTime.substring(0, 5) != "00:00" && item.startTime.substring(0, 5) != "00:00" &&
                <td>
                  {item.startTime.substring(0, 5)} - {item.endTime.substring(0, 5)}
                </td>
              }

              { item.frequency != null && item.frequency >= 0 &&
                <td>
                  {item.frequency === 0
                    ? "Săptămânal"
                    : item.frequency === 1
                    ? "Săptămâna impară"
                    : "Săptămâna pară"}
                </td>
              }

              { item.roomName != "" && 
                <td>
                  <a href={`/${item.roomName}`} className="link">
                    {item.roomName}
                  </a>
                </td>
              }

              { item.formation != null && 
                <td>{item.formation}</td>
              }

              { item.classType != "" && 
                <td>{item.classType}</td>
              }

              { item.courseInstanceName != "" && 
                <td>
                  <a href={`/${item.courseInstanceName}`} className="link">
                    {item.courseInstanceName}
                  </a>
                </td>
              }

              { item.teacherName != "" && 
                <td>
                  <a href={`/${item.teacherName}`} className="link">
                    {item.teacherName}
                  </a>
                </td>
              }

              { modifiable == true && 
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
              }
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrudScheduleTable;
