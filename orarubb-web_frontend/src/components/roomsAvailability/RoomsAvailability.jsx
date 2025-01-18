import React from "react";
import './RoomsAvailability.scss';

const RoomsAvailability = ({ data, allRooms }) => {
    // Days of the week in the specified language
    const days = ["Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata"];

    // Function to get the frequency symbol based on frequency value
    const getFrequencySymbol = (frequency) => {
        // console.log(frequency)
        if (frequency === 2) return 'x';
        if (frequency === 1) return '-/x';
        if (frequency === 0) return 'x/-';
        return '';
    };

    return (
        <div className='rooms-availability-scrollable-container'>
            <table border="1px solid black">
                <tbody>
                {days.map((day, dayIndex) => {
                    // Filter data for the current day
                    console.log(data);
                    const dayData = data.filter(item => item.classDay === day);

                    return (
                        <React.Fragment key={dayIndex}>
                            {/* Header Row */}
                            <tr>
                                <th className='room'>&nbsp;</th>
                                <th className='room'>&nbsp;</th>
                                {allRooms.map((room, roomIndex) => (
                                    <th className='room' key={roomIndex}>
                                        <a href={`/room/${room.name.replace(/\//g, '-')}`}>{room.name}</a>
                                    </th>
                                ))}
                            </tr>

                            {/* Morning Sessions (Hours 8-13) */}
                            {Array.from({ length: 6 }).map((_, rowIndex) => {
                                const currentHour = 8 + rowIndex;

                                return (
                                    <tr key={`morning-${dayIndex}-${rowIndex}`}>
                                        <td className='sticky'>{day}</td>
                                        <td className='hour'>
                                            {currentHour}-{currentHour + 1}
                                        </td>
                                        {allRooms.map((room, roomIndex) => {
                                            const roomData = dayData.find(
                                                item =>
                                                    item.startHour === currentHour &&
                                                    item.rooms.some(r => r.roomName === room.name)
                                            );

                                            const frequency = roomData
                                                ? roomData.rooms.find(
                                                    r => r.roomName === room.name
                                                )?.frequency
                                                : undefined;
                                            
                                            return (
                                                <td key={roomIndex}>
                                                    {frequency !== undefined
                                                        ? getFrequencySymbol(frequency)
                                                        : ''}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                );
                            })}

                            {/* Second Header Row */}
                            <tr>
                                <th className='room'>&nbsp;</th>
                                <th className='room'>&nbsp;</th>
                                {allRooms.map((room, roomIndex) => (
                                    <th className='room' key={roomIndex}>{room.name}</th>
                                ))}
                            </tr>

                            {/* Afternoon Sessions (Hours 14-19) */}
                            {Array.from({ length: 6 }).map((_, rowIndex) => {
                                const currentHour = 14 + rowIndex;

                                return (
                                    <tr key={`afternoon-${dayIndex}-${rowIndex}`}>
                                        <td className='sticky'>{day}</td>
                                        <td className='hour'>
                                            {currentHour}-{currentHour + 1}
                                        </td>
                                        {allRooms.map((room, roomIndex) => {
                                            const roomData = dayData.find(
                                                item =>
                                                    item.startHour === currentHour &&
                                                    item.rooms.some(r => r.roomName === room.name)
                                            );

                                            const frequencies = roomData
                                                ? roomData.rooms
                                                    .filter(r => r.roomName === room.name)
                                                    .map(r => r.frequency)
                                                : [];
                                            
                                            if (frequencies.length > 0)
                                                console.log(frequencies);

                                            return (
                                                <td key={roomIndex}>
                                                    {frequencies.length > 0
                                                        ? getFrequencySymbol(frequencies)
                                                        : ''}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                );
                            })}
                        </React.Fragment>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
};

export default RoomsAvailability;
