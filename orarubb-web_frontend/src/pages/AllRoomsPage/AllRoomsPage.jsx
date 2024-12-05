import Card from "../../components/Card";
import "../AllCoursesPage/CardsPage.scss";
import { getAllRooms } from "../../services/roomsService";
import Layout from "../../components/layout/Layout";
import { useGetAllRoomsQuery } from "../../api/RoomsApi";

const AllRoomsPage = () => {
  //const mockRooms = getAllRooms();
  const { data: rooms = [], isLoading } = useGetAllRoomsQuery();

  {
    isLoading && <div className="loading">Loading...</div>;
  }
  return (
    <Layout>
      <div className="page">
        <h1>Orar sali</h1>
        <div className="cards-list">
          {rooms.map((room) => (
            <Card
              key={room.roomId}
              title={room.name}
              link={`/room/${room.name.replace(/\//g, '-')}`}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AllRoomsPage;
