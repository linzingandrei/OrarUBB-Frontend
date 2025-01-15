import {useNavigate} from "react-router-dom";
import "./UserSchedule.scss";
import Layout from "../../components/layout/Layout";
import {useEffect, useState} from "react";
import GroupsScheduleTabelar from "../../components/groupsSchedule/GroupsScheduleTabelar";
import GroupsScheduleGrafic from "../../components/groupsSchedule/GroupsScheduleGrafic";
import {useAuth} from "../../utils/AuthContext.jsx";
import {useGetClassesForUserQuery} from "../../api/ClassesApi.js";
import {skipToken} from "@reduxjs/toolkit/query";

const dayOrder = {
    Luni: 1,
    Marti: 2,
    Miercuri: 3,
    Joi: 4,
    Vineri: 5,
    Sambata: 6,
    Duminica: 7,
};
const UserSchedule = () => {
    const navigate = useNavigate();
    const [view, setView] = useState('tabelar');
    const {isAuthenticated, userId,  userName, instance, accounts} = useAuth();
    const [schedule, setSchedule] = useState([]);

    const handleViewToggle = () => {
        setView((prevView) => (prevView === 'tabelar' ? 'grafic' : 'tabelar'));
    };

    const {
        data: classesForUser,
        isLoading,
        isError
    } = useGetClassesForUserQuery(
        userId ? {userCode: userId, language: "ro-RO" } : skipToken
    );

    useEffect(() => {
        if (classesForUser) {
            // const transformedSchedule = ({
            //     group: "Orarul tau",
            //     scheduleData: [classesForUser],
            // });
            const sortedScheduleData = [...classesForUser].sort((a, b) => {
                const dayComparison =
                    dayOrder[a.classDay] - dayOrder[b.classDay];

                if (dayComparison === 0) {
                    return a.startHour - b.startHour;
                }

                return dayComparison;
            });
            setSchedule(sortedScheduleData);
        }
    }, [classesForUser]);



    return (
        <Layout>
            <div className="user-schedule-page-container">
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
                    <button
                        className="modify-schedule-button"
                        onClick={() => navigate("/crud-schedule")
                        }
                    >
                        Modifică Orar
                    </button>
                </div>

                {schedule?.length > 0 ? (
                        view === "tabelar" ? (
                            <GroupsScheduleTabelar
                                scheduleData={schedule}
                                group={"Orarul tau"}
                                showHeader={true}
                            />
                        ) : (
                            <GroupsScheduleGrafic
                                scheduleData={schedule}
                                group={"Orarul tau"}
                                showHeader={true}
                            />
                        )
                ) : (
                    <p>No schedule available.</p>
                )}
            </div>
        </Layout>
    );
};

export default UserSchedule;
