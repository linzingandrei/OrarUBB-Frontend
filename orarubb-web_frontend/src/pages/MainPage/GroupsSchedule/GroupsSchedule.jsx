import {useState} from 'react';
import './GroupsSchedule.scss';
import GroupsScheduleTabelar from '../../../components/groupsSchedule/GroupsScheduleTabelar';
import GroupsScheduleGrafic from '../../../components/groupsSchedule/GroupsScheduleGrafic';
import Layout from '../../../components/layout/Layout';

const scheduleForGroup931 = [
    {
        class_id: "0842c56a-7c4a-4331-a0c4-4e432940e83b",
        class_day: "Luni",
        start_hour: 8,
        end_hour: 10,
        frequency: 0,
        room: "2/I",
        formation: "931",
        class_type: "Seminar",
        course_instance_code: "MLM0009",
        teacher: "Lect. Darabant Sergiu-Adrian",
    },
    {
        class_id: "0842c56a-7c4a-4331-a0c4-4e432940e83b",
        class_day: "Luni",
        start_hour: 8,
        end_hour: 10,
        frequency: 0,
        room: "2/I",
        formation: "931",
        class_type: "Seminar",
        course_instance_code: "MLM0009",
        teacher: "Lect. Darabant Sergiu-Adrian",
    },
    {
        class_id: "0842c56a-7c4a-4331-a0c4-4e432940e83b",
        class_day: "Luni",
        start_hour: 8,
        end_hour: 10,
        frequency: 0,
        room: "2/I",
        formation: "931",
        class_type: "Seminar",
        course_instance_code: "MLM0009",
        teacher: "Lect. Darabant Sergiu-Adrian",
    },
    {
        class_id: "0842c56a-7c4a-4331-a0c4-4e432940e83b",
        class_day: "Luni",
        start_hour: 8,
        end_hour: 10,
        frequency: 0,
        room: "2/I",
        formation: "931",
        class_type: "Seminar",
        course_instance_code: "MLM0009",
        teacher: "Lect. Darabant Sergiu-Adrian",
    },
];

const scheduleForGroup932 = [
    {
        class_id: "d4f72c60-c69a-4b92-988b-4b3fbd344hfg",
        class_day: "Luni",
        start_hour: 12,
        end_hour: 14,
        frequency: 2,
        room: "3/I",
        formation: "932",
        class_type: "Curs",
        course_instance_code: "INF1234",
        teacher: "Lect. SULYOK Csaba",
    },
];

const schedules = [
    {group: 931, scheduleData: scheduleForGroup931},
    {group: 932, scheduleData: scheduleForGroup932},
];
const GroupsSchedule = () => {
    const [view, setView] = useState('tabelar');

    const handleViewToggle = () => {
        setView((prevView) => (prevView === 'tabelar' ? 'grafic' : 'tabelar'));
    };

    return (
        <Layout>
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
                {schedules.map((schedule) => (
                    view === 'tabelar' ? (
                        <GroupsScheduleTabelar
                            key={schedule.group}
                            scheduleData={schedule.scheduleData}
                            group={schedule.group}
                        />
                    ) : (
                        <GroupsScheduleGrafic
                            key={schedule.group}
                            scheduleData={schedule.scheduleData}
                            group={schedule.group}
                        />
                    )
                ))}
            </div>
        </Layout>
    );
};

export default GroupsSchedule;
