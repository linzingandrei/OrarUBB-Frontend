import React from "react";
import "./GroupsScheduleGrafic.scss";

const GroupsScheduleGrafic = ({ scheduleData, group }) => {
  const daysOfWeek = ["Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata"];
  const timeSlots = Array.from({ length: 12 }, (_, i) => ({
    start: 8 + i,
    end: 9 + i,
  }));

  const renderCellContent = (day, timeSlot) => {
    const matchingClasses = scheduleData.filter(
      (item) =>
        item.class_day === day &&
        item.start_hour <= timeSlot.start &&
        item.end_hour > timeSlot.start
    );
  
    const startingClasses = matchingClasses.filter(
      (item) => item.start_hour === timeSlot.start
    );
  
    const ongoingClasses = matchingClasses.filter(
      (item) => item.start_hour < timeSlot.start && item.end_hour > timeSlot.start
    );
  
    if (startingClasses.length > 0) {
      return (
        <td
          key={`${day}-${timeSlot.start}`}
          className="scheduler-cell"
          rowSpan={startingClasses[0].end_hour - startingClasses[0].start_hour}
        >
          <div
            className="class-container"
          >
            {startingClasses.map((entry, index) => (
              <div
                key={`${entry.course_instance_code}-${index}`}
                className="class-card"
              >
                <strong>{entry.class_type}</strong> <br />
                {entry.course_instance_code} <br />
                Room: {entry.room} <br />
                Teacher: {entry.teacher} <br />
                Formation: {entry.formation}
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
      <h2 className="table-title">Grupa {group}</h2>
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
