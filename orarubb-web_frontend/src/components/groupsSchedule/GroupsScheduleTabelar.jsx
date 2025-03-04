import "./GroupsScheduleTabelar.scss";
import {Link, ScrollRestoration} from "react-router-dom";
import { useState, useEffect } from "react";

const GroupsScheduleTabelar = ({ scheduleData, identity, showHeader, tableType }) => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 920);
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 920);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="table-container-gt">
      {showHeader ? (
        <h2 className="table-title-gt">
          {tableType === "personal" ? "Orarul tau" : null}
          {tableType === "teacher" ? "Orar " + identity : null}
          {tableType === "group" ? "Grupa " + identity : null}

        </h2>
      ) : null}
      <table className="table-gt">
        <thead>
          <tr>
            {isMobileView ? (
              <th>Ziua si Orele</th>
            ) : (
              <>
                <th>Ziua</th>
                <th>Orele</th>
              </>
            )}
            <th>Frecventa</th>
            <th>Sala</th>
            <th>Formatia</th>
            <th>Tipul</th>
            <th>Disciplina</th>
            {
              tableType !== "teacher" ? (
                  <th>Cadrul didactic</th>
              ) : null
            }
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((item, index) => (
            <tr key={index}>
              {isMobileView ? (
                <td className="mobile-view-td-gt">
                  {item.classDay} {item.startHour}-{item.endHour}
                </td>
              ) : (
                <>
                  <td data-label="Ziua">{item.classDay}</td>
                  <td data-label="Orele">
                    {item.startHour} - {item.endHour}
                  </td>
                </>
              )}
              <td data-label="Frecventa">
                {item.frequency === 0
                  ? "Săptămânal"
                  : item.frequency === 1
                  ? "Săptămâna impară"
                  : "Săptămâna pară"}
              </td>
              <td data-label="Sala">
                <Link
                  to={`/room/${item.room.replace(/\//g, "-")}`}
                  className="link-gt"
                >
                  {item.room}
                </Link>
              </td>
              <td data-label="Formatia">{item.formation}</td>
              <td data-label="Tipul">{item.classType}</td>
              <td data-label="Disciplina">
                <Link
                  to={`/course/${item.courseInstanceCode}`}
                  className="link-gt"
                >
                  {item.courseInstanceName}
                </Link>
              </td>
              {
                tableType !== "teacher" ? (
                    <td data-label="Profesor">
                      <Link to={`/teacher/${item.teacherCode}`} className="link-gt">
                        {item.teacher}
                      </Link>
                    </td>
                ) : null
              }

            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
};

export default GroupsScheduleTabelar;
