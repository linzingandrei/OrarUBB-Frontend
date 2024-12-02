import React from 'react'
import './RoomsAvailability.scss'

const RoomsAvailability = ({data, allRooms}) => {
    // console.log(data);
    // console.log(allRooms);
    // to make call to backend for days in specified language
    const days = ["Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata"]

    const getFrequencySymbol = (frequency) => {
        if (frequency === 2) return 'x';
        else if (frequency === 1) return '-/x';
        else if (frequency === 0) return 'x/-';
    };

    return (
        <div className='scrollable-container'>
            <table border={"1px solid black"}>
                <tbody>
                    {days.map((day, dayIndex) => {
                        let hour = 8;

                        const dayData = data.filter(item => item.classDay === day);

                        return (
                            <React.Fragment key={dayIndex}>
                                <tr>
                                    <th className='room'>&nbsp;</th>
                                    <th className='room'>&nbsp;</th>
                                    {allRooms.map((room, roomIndex) => (
                                        <th className='room' key={roomIndex}>
                                            <a href={`/room/${room.roomId}`}>{room.name}</a>
                                        </th>
                                    ))}
                                </tr>

                                {Array.from({ length: 6 }).map((_, rowIndex) => {
                                    const currentHour = hour++;
                                    
                                    return (
                                        <tr key={`${dayIndex}-${rowIndex}`}>
                                            <td className='sticky'>{day}</td>
                                            <td className='hour'>{currentHour}-{currentHour + 1}</td>

                                            {allRooms.map((room, roomIndex) => {
                                                const roomData = dayData.find(
                                                    item =>
                                                        item.startHour === currentHour &&
                                                        item.rooms.some(r => r.roomName === room.name)
                                                );

                                                const frequency =
                                                    roomData?.rooms.find(r => r.roomName === room.name)?.frequency || "";

                                                return (
                                                    <td key={roomIndex}>
                                                        {frequency != undefined ? getFrequencySymbol(frequency) : ""}
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                    );
                                })}

                                <tr>
                                    <th className='room'>&nbsp;</th>
                                    <th className='room'>&nbsp;</th>
                                    {allRooms.map((room, roomIndex) => (
                                        <th className='room' key={roomIndex}>{room.name}</th>
                                    ))}
                                </tr>

                                {Array.from({ length: 6 }).map((_, rowIndex) => {
                                    const currentHour = hour++;
                                    
                                    return (
                                        <tr key={`${dayIndex}-${rowIndex}`}>
                                            <td className='sticky'>{day}</td>
                                            <td className='hour'>{currentHour}-{currentHour + 1}</td>

                                            {allRooms.map((room, roomIndex) => {
                                                const roomData = dayData.find(
                                                    item =>
                                                        item.startHour === currentHour &&
                                                        item.rooms.some(r => r.roomName === room.name)
                                                );

                                                const frequency =
                                                    roomData?.rooms.find(r => r.roomName === room.name)?.frequency || "";

                                                return (
                                                    <td key={roomIndex}>
                                                        {frequency != undefined ? getFrequencySymbol(frequency) : ""}
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
}

export default RoomsAvailability;