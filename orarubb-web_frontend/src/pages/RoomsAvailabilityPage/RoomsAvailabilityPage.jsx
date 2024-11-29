import React, { useState, useEffect } from 'react'
import getRoomsSchedules from '../../services/roomsAvailabilityService'
import Layout from '../../components/layout/Layout';
import RoomsAvailability from '../../components/roomsAvailability/RoomsAvailability';
import { getAllRooms } from '../../services/roomsService';


const RoomsAvailabilityPage = () => {
    const roomsSchedule = getRoomsSchedules("ro-RO");
    const allRooms = getAllRooms();

    // console.log("AICI:", numberOfRooms);

    return (
        <Layout>
            <div>
                <h2>Rooms Schedules:</h2>
                <div>
                    <RoomsAvailability data = {roomsSchedule} allRooms = {allRooms}/>
                </div>
            </div>
        </Layout>
    );
}

export default RoomsAvailabilityPage;