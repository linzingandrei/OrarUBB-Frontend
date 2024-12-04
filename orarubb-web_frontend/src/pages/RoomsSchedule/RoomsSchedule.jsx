import Layout from "../../components/layout/Layout";
import "./RoomsSchedule.scss";
import RoomSchedule from "../../components/roomSchedule/RoomSchedule";
import {useGetRoomClassesQuery} from "../../api/RoomsApi.js";

const RoomsSchedule = () => {
    const {data: roomSchedule = []} = useGetRoomClassesQuery({
        roomId: 3,
        languageTag: "ro-RO",
    });
    return (
        <Layout>
            <div className="rooms-schedule">
                <div className="schedule-room">
                    <RoomSchedule scheduleData={roomSchedule} room={"C335"}/>
                </div>
            </div>
        </Layout>
    );
};

export default RoomsSchedule;
