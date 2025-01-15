import React from "react";
import "./GroupsScheduleGrafic.scss";

const GroupsScheduleGrafic = ({ scheduleData, group, showHeader }) => {
  const daysOfWeek = ["Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata"];
  const timeSlots = Array.from({ length: 12 }, (_, i) => ({
    start: 8 + i,
    end: 9 + i,
  }));

  const renderCellContent = (day, timeSlot) => {
    const matchingClasses = scheduleData.filter(
      (item) =>
        item.classDay === day &&
        item.startHour <= timeSlot.start &&
        item.endHour > timeSlot.start
    );

    const startingClasses = matchingClasses.filter(
      (item) => item.startHour === timeSlot.start
    );

    const ongoingClasses = matchingClasses.filter(
      (item) => item.startHour < timeSlot.start && item.endHour > timeSlot.start
    );

    if (startingClasses.length > 0) {
      return (
        <td
          key={`${day}-${timeSlot.start}`}
          className="scheduler-cell"
          rowSpan={startingClasses[0].endHour - startingClasses[0].startHour}
        >
          <div className="class-container">
            {startingClasses.map((entry, index) => (
              <div
                key={`${entry.courseInstanceCode}-${index}`}
                className="class-card"
              >
                <strong>{entry.classType}</strong> <br />
                {entry.courseInstanceName} <br />
                Room: {entry.room} <br />
                Teacher: {entry.teacher} <br />
                Formation: {entry.formation} <br />
                Frecventa:{" "}
                {entry.frequency === 0
                  ? "Săptămânal"
                  : entry.frequency === 1
                  ? "Săptămâna impară"
                  : "Săptămâna pară"}
              </div>
            ))}
          </div>
        </td>
      );
    } else if (ongoingClasses.length > 0) {
      return;
    }
    return <td key={`${day}-${timeSlot.start}`}></td>;
  };

  return (
    <div className="table-container">
      {showHeader ? (<h2 className="table-title-gt">{group === "Orarul tau" ? "Orarul tau" : "Grupa " + group}</h2>) : null}
      <table className="scheduler-table">
        <thead>
          <tr>
            <th>Ora/Ziua</th>
            {daysOfWeek.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((slot) => (
            <tr key={slot.start}>
              <td>{`${slot.start}:00 - ${slot.end}:00`}</td>
              {daysOfWeek.map((day) => renderCellContent(day, slot))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GroupsScheduleGrafic;
