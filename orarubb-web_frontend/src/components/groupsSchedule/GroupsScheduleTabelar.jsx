import React from 'react';
import './GroupsScheduleTabelar.scss';
import { Link } from 'react-router-dom';

const GroupsScheduleTabelar = ({ scheduleData, group }) => {
  return (
    <div className="table-container">
      <h2 className="table-title">Grupa {group}</h2>
      <table className="table">
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
              <td>{item.class_day}</td>
              <td>{item.start_hour} - {item.end_hour}</td>
              <td>{item.frequency === 0 ? "Săptămânal" : item.frequency === 1 ? "Săptămâna impară" : "Săptămâna pară"}</td>
              <td>
                <Link to={`/room/${item.room}`} className="link">{item.room}</Link>
              </td>
              <td>{item.formation}</td>
              <td>{item.class_type}</td>
              <td>
                <Link to={`/course/${item.course_instance_code}`} className="link">{item.course_instance_code}</Link>
              </td>
              <td>
                <Link to={`/teacher/${item.teacher}`} className="link">{item.teacher}</Link>
                {/*!!! IMPORTANT - need to think of abbreviations and names to not mess up routing*/}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GroupsScheduleTabelar;
