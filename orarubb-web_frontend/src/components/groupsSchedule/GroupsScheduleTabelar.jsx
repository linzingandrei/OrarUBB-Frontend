import React from 'react';
import "./GroupsScheduleTabelar.scss"
const GroupsScheduleTabelar = ({ scheduleData, group }) => {
  return (
    <div className="table-container-gt">
      <h2 className="table-title-gt">Grupa {group}</h2>
      <table className="table-gt">
        <thead>
          <tr>
            <th>Ziua</th>
            <th>Orele</th>
            <th>Frecventa</th>
            <th>Sala</th>
            <th>Formatia</th>
            <th>Tipul</th>
            <th>Disciplina</th>
            <th>Cadrul didactic</th>
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((item, index) => (
            <tr key={index}>
              <td data-label="Ziua">{item.class_day}</td>
              <td data-label="Orele">{item.start_hour} - {item.end_hour}</td>
              <td data-label="Frecventa">{item.frequency === 0 ? "Săptămânal" : item.frequency === 1 ? "Săptămâna impară" : "Săptămâna pară"}</td>
              <td data-label="Sala">
                <a href={`#${item.room}`} className="link-gt">
                  {item.room}
                </a>
              </td>
              <td data-label="Formatia">{item.formation}</td>
              <td data-label="Tipul">{item.class_type}</td>
              <td data-label="Disciplina">
                <a href={`#${item.course_instance_code}`} className="link-gt">
                  {item.course_instance_code}
                </a>
              </td>
              <td data-label="Profesor">
                <a href={`#${item.teacher}`} className="link-gt">
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

export default GroupsScheduleTabelar;
