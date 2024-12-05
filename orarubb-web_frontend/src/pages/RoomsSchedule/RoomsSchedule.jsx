import Layout from "../../components/layout/Layout";
import "./RoomsSchedule.scss";
import RoomSchedule from "../../components/roomSchedule/RoomSchedule";
import {useGetRoomClassesQuery} from "../../api/RoomsApi.js";
import {useParams} from "react-router-dom";

const RoomsSchedule = () => {
    const {roomName} = useParams();
    const {data: roomSchedule = []} = useGetRoomClassesQuery({
        roomName: roomName,
        languageTag: "ro-RO",
    });
    console.log(roomName);
    return (
        <Layout>
            <div className="rooms-schedule">
                <div className="schedule-room">
                    <RoomSchedule scheduleData={roomSchedule} room={roomName}/>
                </div>
            </div>
        </Layout>
    );
};

export default RoomsSchedule;
