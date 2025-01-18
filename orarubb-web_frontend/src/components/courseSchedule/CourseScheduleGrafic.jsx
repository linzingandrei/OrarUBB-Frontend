import React from "react";
import "../professorSchedule/ProfessorSchedule.scss";

export const CourseScheduleGrafic = ({ scheduleData, course }) => {
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
          className="profG-scheduler-cell"
          rowSpan={startingClasses[0].endHour - startingClasses[0].startHour}
        >
          <div className="profG-class-container">
            {startingClasses.map((entry, index) => (
              <div
                key={`${entry.courseInstanceCode}-${index}`}
                className="profG-class-card"
              >
                <strong>{entry.classType}</strong> <br />
                {entry.courseInstanceName} <br />
                Sala: {entry.room} <br />
                Formatia: {entry.formation} <br />
                Anul: {entry.year} <br />
                Frecventa:{" "}
                {entry.frequency === 0
                  ? "Săptămânal"
                  : entry.frequency === 1
                  ? "Săptămâna impară"
                  : "Săptămâna pară"}
                Cadru didactic: {entry.teacher}
              </div>
            ))}
          </div>
        </td>
      );
    } else if (ongoingClasses.length > 0) {
      return null;
    }
    return <td key={`${day}-${timeSlot.start}`}></td>;
  };

  return (
    <div className="profG-table-container">
      <h2 className="profG-table-title">
        Orar {scheduleData[0].courseInstanceName}
      </h2>
      <table className="profG-schedular-table">
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

export default CourseScheduleGrafic;
