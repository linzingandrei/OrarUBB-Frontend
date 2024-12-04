import React from 'react';
import {useGetAllRoomsQuery, useGetRoomsSchedulesQuery} from "../../api/RoomsApi";
import Layout from '../../components/layout/Layout';
import RoomsAvailability from '../../components/roomsAvailability/RoomsAvailability';

const RoomsAvailabilityPage = () => {
    const { data: roomsSchedule = []} = useGetRoomsSchedulesQuery("ro-RO");
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
