import Card from "../../components/Card";
import { getAllRooms } from "../../services/roomsService";
import "../../components/Card.scss";
import Layout from "../../components/layout/Layout";
import { useGetAllRoomsQuery } from "../../api/RoomsApi";
import { LoadingComponent } from "../../components/LoadingComponent";
import "../../components/Card.scss";

const AllRoomsPage = () => {
  //const mockRooms = getAllRooms();
  const { data: rooms = [], isLoading } = useGetAllRoomsQuery();

  {
    isLoading && (
      <div className="loading">
        <LoadingComponent />
      </div>
    );
  }
  return (
    <Layout>
      <div className="page">
        <div className="header">
          <h1>Orar sali</h1>
        </div>
        <div className="cards-list">
          {rooms.map((room) => (
            <Card
              key={room.roomId}
              title={room.name}
              link={`/room/${room.name.replace(/\//g, "-")}`}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AllRoomsPage;
