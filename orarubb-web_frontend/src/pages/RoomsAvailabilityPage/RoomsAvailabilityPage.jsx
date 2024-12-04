import React from 'react';
import { useGetAllRoomsQuery } from "../../api/RoomsApi";
import Layout from '../../components/layout/Layout';
import RoomsAvailability from '../../components/roomsAvailability/RoomsAvailability';
import getRoomsSchedules from '../../services/roomsAvailabilityService';

const RoomsAvailabilityPage = () => {
    const roomsSchedule = getRoomsSchedules("ro-RO");
    const { data: allRooms = [], isLoading, isError, error } = useGetAllRoomsQuery();

    if (isLoading) {
        return <Layout><div>Loading...</div></Layout>;
    }

    if (isError) {
        return <Layout><div>Error: {error.toString()}</div></Layout>;
    }

    return (
        <Layout>
            <div>
                <h2>Rooms Schedules:</h2>
                <RoomsAvailability data={roomsSchedule} allRooms={allRooms} />
            </div>
        </Layout>
    );
};

export default RoomsAvailabilityPage;
