import {useNavigate} from "react-router-dom";
import "./UserSchedule.scss";
import Layout from "../../components/layout/Layout";
import {useState} from "react";
import GroupsScheduleTabelar from "../../components/groupsSchedule/GroupsScheduleTabelar";
import GroupsScheduleGrafic from "../../components/groupsSchedule/GroupsScheduleGrafic";
import getScheduleService from "../../services/personalScheduleService";
import CrudSchedule from "./CrudSchedule";
import CrudScheduleTable from "../../components/crudSchedule/CrudScheduleTable";


// const schedules = [
    // {group: 931, scheduleData: initialSchedule}
// ];

const UserSchedule = () => {
    const initialSchedule = getScheduleService(JSON.parse(localStorage.getItem("user"))["unique_code"]);
    console.log(initialSchedule);
    // const schedules = [
        // {group: 931, scheduleData: initialSchedule}
    // ];
    const navigate = useNavigate();
    const [view, setView] = useState('tabelar');

    const handleViewToggle = () => {
        setView((prevView) => (prevView === 'tabelar' ? 'grafic' : 'tabelar'));
    };

    return (
        <Layout>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="page-container">
                <div className="view-toggle">
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={view === 'grafic'}
                            onChange={handleViewToggle}
                        />
                        <span className="slider"></span>
                    </label>
                    <p>{view === 'tabelar' ? 'Format Tabelar' : 'Format Grafic'}</p>
                </div>
                <button
                    className="modify-schedule-button"
                    onClick={() => navigate("/crud-schedule")
                    }
                >
                    Modifică Orar
                </button>
                    {initialSchedule?.length > 0 ? (
                        <CrudScheduleTable
                            scheduleData={initialSchedule}
                            modifiable={false}
                        />
                        // initialSchedule.map((schedule, index) => (
                        // <div key={index}>
                            // {Object.entries(schedule).map(([key, value]) => (
                                // <div key={key}>
                                    // <strong>{key}:</strong> {value}
                                // </div>
                            // ))}
                        // </div>
                    ): (
                    <p>No schedule available.</p>
                )}
            </div>
        </Layout>
    );
};

                // {schedules?.length > 0 ? (
                    // schedules.map((s) =>
                        // view === "tabelar" ? (
                            // <GroupsScheduleTabelar
                                // key={s.group}
                                // scheduleData={s.scheduleData}
                                // group={s.group}
                            // />
                        // ) : (
                            // <GroupsScheduleGrafic
                                // key={s.group}
                                // scheduleData={s.scheduleData}
                                // group={s.group}
                            // />
                        // )
                    // )
                // ) : (
export default UserSchedule;
