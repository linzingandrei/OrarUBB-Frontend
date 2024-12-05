import Card from '../../components/Card';
import '../AllCoursesPage/CardsPage.scss'
import { getAllRooms } from '../../services/roomsService';
import Layout from '../../components/layout/Layout';

const AllRoomsPage = () => {
    const mockRooms = getAllRooms();

    return (
        <Layout>
            <div className="page">
                <h1>Orar sali</h1>
                <div className="cards-list">
                    {mockRooms.map((room) => (
                        <Card
                            key={room.room_id}
                            title={room.name}
                            link={`/room/${room.room_id}`}  // assuming for now the room schedule page is at `/room/:id`
                        />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default AllRoomsPage;
