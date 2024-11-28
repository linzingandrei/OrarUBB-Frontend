import './RoomsTable.scss';
import { useNavigate } from "react-router-dom";
import { getAllRooms } from '../../services/roomsService';

const RoomsTable = () => {
    const navigate = useNavigate();
    const rooms = getAllRooms();

    return (
        <div className="rooms-table-container">
            <h2 className='table-title'>Legenda Salilor</h2>
            <table className="table">
            <thead>
                <tr>
                    <th>Sala</th>
                    <th>Localizarea</th>
                </tr>
            </thead>
            <tbody>
                {rooms.map(room => (
                    <tr key={room.room_id}  /* onClick={() => navigate(`/rooms/${room.room_id}`)} -> 
                                            we could do a page with the exact location of a room using google maps api in the future */>
                        <td>{room.name}</td>
                        <td>{room.address}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
};

export default RoomsTable;