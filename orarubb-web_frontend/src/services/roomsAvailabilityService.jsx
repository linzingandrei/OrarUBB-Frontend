import React, { useState, useEffect } from 'react'


const getRoomsSchedules = (language) => {
    const [roomsAvailabilities, setRoomsAvailabilities] = useState([]);

    useEffect(() => {
        fetch(`/rooms/rooms-schedule/${language}`)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                setRoomsAvailabilities(data);
            })
            .catch((err) => {
                console.log(err.message);
            })        
    }, [language]);

    return roomsAvailabilities;
}

export default getRoomsSchedules;