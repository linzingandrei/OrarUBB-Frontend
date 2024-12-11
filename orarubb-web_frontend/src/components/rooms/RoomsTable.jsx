import './RoomsTable.scss';
import {useGetAllRoomsQuery} from "../../api/RoomsApi.js";

const RoomsTable = () => {
    // const rooms = getAllRooms();
    const {data: rooms = []  } = useGetAllRoomsQuery();

    return (
        <div className="rooms-table-container">
            <h2 className='rooms-table-title'>Legenda Salilor</h2>
            <table className="rooms-table">
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