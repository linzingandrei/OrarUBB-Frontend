import Layout from "../../components/layout/Layout";
import "./RoomsSchedule.scss";
import RoomSchedule from "../../components/roomSchedule/RoomSchedule";
import { getRoomC335Schedule } from "../../services/roomsScheduleService";

const RoomsSchedule = () => {
  return (
    <Layout>
      <div className="rooms-schedule">
        <div className="schedule-room">
          <RoomSchedule scheduleData={getRoomC335Schedule()} room={"C335"} />
        </div>
      </div>
    </Layout>
  );
};

export default RoomsSchedule;
