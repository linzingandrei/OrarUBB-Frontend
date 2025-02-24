import React from "react";
import "./GroupsScheduleGrafic.scss";

const GroupsScheduleGrafic = ({scheduleData, group, showHeader}) => {
    const daysOfWeek = [
        "Luni",
        "Marti",
        "Miercuri",
        "Joi",
        "Vineri",
        "Sambata",
    ];

    // Helper: return background class based on the class type ("tipul")
    const getCardClassName = (classType) => {
        if (classType === "Curs") return "curs-bg";
        if (classType === "Seminar") return "seminar-bg";
        if (classType === "Laborator") return "laborator-bg";
        return "";
    };

    // -------------------- Desktop View -------------------- //

    // Determine the time range from the schedule data (default start at 8:00)
    const scheduleStart = 8;
    const scheduleEnd =
        scheduleData.length > 0
            ? Math.max(...scheduleData.map((item) => item.endHour))
            : 20;
    const timeSlots = Array.from(
        {length: scheduleEnd - scheduleStart},
        (_, i) => ({
            start: scheduleStart + i,
            end: scheduleStart + i + 1,
        })
    );

    // Only include days that have classes in the desktop view
    const daysWithData = daysOfWeek.filter((day) =>
        scheduleData.some((item) => item.classDay === day)
    );

    // Render a table cell for a given day and time slot.
    const renderDesktopCellContent = (day, timeSlot) => {
        // Get all classes for this day that overlap the current time slot
        const matchingClasses = scheduleData.filter(
            (item) =>
                item.classDay === day &&
                item.startHour <= timeSlot.start &&
                item.endHour > timeSlot.start
        );

        // If a class starts exactly at this time, render it with rowspan
        const startingClasses = matchingClasses.filter(
            (item) => item.startHour === timeSlot.start
        );
        // If a class is ongoing (started earlier), skip rendering a cell here.
        const ongoingClasses = matchingClasses.filter(
            (item) =>
                item.startHour < timeSlot.start && item.endHour > timeSlot.start
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
                                className={`class-card ${getCardClassName(entry.classType)}`}
                            >
                                <table className="class-card-table">
                                    <tbody>
                                    <tr>
                                        <td colSpan="2" className="class-card-heading">
                                            <strong>{entry.classType}</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">{entry.courseInstanceName}</td>
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
        } else if (ongoingClasses.length > 0) {
            // Skip rendering a cell if a class is already in progress
            return null;
        }
        // Otherwise, render an empty cell.
        return (
            <td key={`${day}-${timeSlot.start}`} className="empty-cell"></td>
        );
    };

    // -------------------- Mobile View -------------------- //

    // Group schedule data by day (using daysOfWeek order)
    const scheduleByDay = daysOfWeek
        .map((day) => {
            const classes = scheduleData
                .filter((item) => item.classDay === day)
                .sort((a, b) => a.startHour - b.startHour);
            return {day, classes};
        })
        .filter((grouped) => grouped.classes.length > 0);

    return (
        <div className="table-container">
            {showHeader && (
                <h2 className="table-title-gt">
                    {group === "Orarul tau" ? "Orarul tau" : "Grupa " + group}
                </h2>
            )}
            {/* Desktop Table View */}
            <div className="desktop-view">
                <div className="responsive-table-wrapper">
                    <div className="table-scroll-container">
                        <table className="scheduler-table">
                            <thead>
                            <tr>
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
                                    {daysWithData.map((day) =>
                                        renderDesktopCellContent(day, slot)
                                    )}
                                </tr>
                            ))}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

            {/* Mobile Time Block View */}
            <div className="mobile-view">
                {scheduleByDay.map(({day, classes}) => (
                    <div key={day} className="mobile-day-section">
                        <h3 className="mobile-day-header">{day}</h3>
                        <div className="mobile-day-cards">
                            {classes.map((entry, index) => (
                                <div
                                    key={`${entry.courseInstanceCode}-${index}`}
                                    className={`mobile-class-card ${getCardClassName(
                                        entry.classType
                                    )}`}
                                >
                                    <div className="mobile-class-time">
                                        {`${entry.startHour}:00 - ${entry.endHour}:00`}
                                    </div>
                                    <div className="mobile-class-content">
                                        <div className="mobile-class-heading">
                                            <strong>{entry.classType}</strong>
                                        </div>
                                        <div>{entry.courseInstanceName}</div>
                                        <div>
                                            <strong>Room:</strong> {entry.room}
                                        </div>
                                        <div>
                                            <strong>Teacher:</strong> {entry.teacher}
                                        </div>
                                        <div>
                                            <strong>Formation:</strong> {entry.formation}
                                        </div>
                                        <div>
                                            <strong>Frecvență:</strong>{" "}
                                            {entry.frequency === 0
                                                ? "Săptămânal"
                                                : entry.frequency === 1
                                                    ? "Săptămâna impară"
                                                    : "Săptămâna pară"}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GroupsScheduleGrafic;
