import React from "react";
import "./GroupsScheduleGrafic.scss";

const GroupsScheduleGrafic = ({ scheduleData, group, showHeader }) => {
  // Original days
  const daysOfWeek = ["Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata"];

  // Filter days to display only those that have data
  const daysWithData = daysOfWeek.filter((day) =>
      scheduleData.some((item) => item.classDay === day)
  );

  // Generate time slots 8:00-9:00, 9:00-10:00, etc.
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
      const rowSpanValue =
          startingClasses[0].endHour - startingClasses[0].startHour;

      return (
          <td
              key={`${day}-${timeSlot.start}`}
              className="scheduler-cell"
              rowSpan={rowSpanValue}
          >
            <div className="class-container">
              {startingClasses.map((entry, index) => (
                  <div
                      key={`${entry.courseInstanceCode}-${index}`}
                      className="class-card"
                  >
                    <table className="class-card-table">
                      <tbody>
                      <tr>
                        <td colSpan={2} className="class-card-heading">
                          <strong>{entry.classType}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}>{entry.courseInstanceName}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Room:</strong>
                        </td>
                        <td>{entry.room}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Teacher:</strong>
                        </td>
                        <td>{entry.teacher}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Formation:</strong>
                        </td>
                        <td>{entry.formation}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Frecvență:</strong>
                        </td>
                        <td>
                          {entry.frequency === 0
                              ? "Săptămânal"
                              : entry.frequency === 1
                                  ? "Săptămâna impară"
                                  : "Săptămâna pară"}
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
              ))}
            </div>
          </td>
      );
    }
    // If a class is ongoing (started earlier, continues into this hour)
    else if (ongoingClasses.length > 0) {
      return null; // no extra cell
    }
    // Empty cell if there's no class
    return <td key={`${day}-${timeSlot.start}`}></td>;
  };

  return (
      <div className="table-container">
        {showHeader ? (
            <h2 className="table-title-gt">
              {group === "Orarul tau" ? "Orarul tau" : "Grupa " + group}
            </h2>
        ) : null}

        <div className="responsive-table-wrapper">
          <table className="scheduler-table">
            <thead>
            <tr>
              {/* Sticky top header for "Ora/Ziua" */}
              <th className="time-slot-header">Ora/Ziua</th>
              {daysWithData.map((day) => (
                  <th key={day} className="day-header">
                    {day}
                  </th>
              ))}
            </tr>
            </thead>

            <tbody>
            {timeSlots.map((slot) => (
                <tr key={slot.start}>
                  <td className="time-slot-cell">
                    {`${slot.start}:00 - ${slot.end}:00`}
                  </td>

                  {daysWithData.map((day) => renderCellContent(day, slot))}
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default GroupsScheduleGrafic;
