import React, { useState, useEffect } from 'react'


const getScheduleService = (userId) => {
    const [personalSchedule, setPersonalSchedule] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/my-account/${userId}/personal_schedule`)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                setPersonalSchedule(data);
            })
            .catch((err) => {
                console.log(err.message);
            })        
    }, [userId]);

    console.log(personalSchedule)
    return personalSchedule;
}

export default getScheduleService;