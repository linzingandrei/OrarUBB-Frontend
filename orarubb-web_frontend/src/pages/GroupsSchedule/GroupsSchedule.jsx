import {useState} from "react";
import "./GroupsSchedule.scss";
import GroupsScheduleTabelar from "../../components/groupsSchedule/GroupsScheduleTabelar";
import GroupsScheduleGrafic from "../../components/groupsSchedule/GroupsScheduleGrafic";
import Layout from "../../components/layout/Layout";
import {useParams} from "react-router-dom";
import {useGetIdForAcademicSpecializationAbbreviationQuery} from "../../api/AcademicSpecializationsApi";
import {useGetAllGroupsWithAcademicSpecializationIdAndYearQuery} from "../../api/GroupsApi";
import {useEffect} from "react";
import {useGetClassesForGroupQuery, useLazyGetClassesForGroupQuery} from "../../api/ClassesApi";

const dayOrder = {
    Luni: 1,
    Marti: 2,
    Miercuri: 3,
    Joi: 4,
    Vineri: 5,
    Sambata: 6,
    Duminica: 7,
};

const GroupsSchedule = () => {
    const [view, setView] = useState("tabelar");
    const [groupSchedules, setGroupSchedules] = useState([]);
    const [academicSpecializationId, setAcademicSpecializationId] = useState(0);
    const [year, setYear] = useState(1);
    const [groupsList, setGroupsList] = useState(null);
    const [expandedGroups, setExpandedGroups] = useState({});

    const {abbreviation, groupYear} = useParams();

    const {data: academicSpecId} =
        useGetIdForAcademicSpecializationAbbreviationQuery(abbreviation);

    useEffect(() => {
        if (academicSpecId) {
            setAcademicSpecializationId(academicSpecId);
        }
        if (groupYear) {
            setYear(parseInt(groupYear, 10));
        }
    }, [academicSpecId, groupYear]);

    const {
        data: groupsData,
        isLoading: isGroupsLoading,
        error: groupsError,
    } = useGetAllGroupsWithAcademicSpecializationIdAndYearQuery({
        academicSpecializationId,
        year,
    });

    useEffect(() => {
        if (groupsData && groupsData.groups.length > 0) {
            // const updatedGroupsList = groupsData.groups.map((group) =>
            //   group.replace("/", "-")
            // );
            setGroupsList(groupsData.groups);
        }
    }, [groupsData]);

    const [fetchGroupSchedule] = useLazyGetClassesForGroupQuery();

    useEffect(() => {
        if (groupsList && groupsList.length > 0) {
            const fetchSchedules = async () => {
                try {
                    const schedules = await Promise.all(
                        groupsList.map(async (group) => {
                            const scheduleResponse = await fetchGroupSchedule({
                                groupCode: group,
                                language: "ro-RO",
                            }).unwrap();

                            const sortedScheduleData = [...scheduleResponse].sort((a, b) => {
                                const dayComparison =
                                    dayOrder[a.classDay] - dayOrder[b.classDay];

                                if (dayComparison === 0) {
                                    return a.startHour - b.startHour;
                                }

                                return dayComparison;
                            });

                            console.log("sorted", sortedScheduleData);

                            return {group: group, scheduleData: sortedScheduleData};
                        })
                    );

                    setGroupSchedules(
                        [...schedules].sort((a, b) => a.group.localeCompare(b.group))
                    );
                } catch (error) {
                    console.error("Error fetching schedules:", error);
                }
            };

            fetchSchedules();
        }
    }, [groupsList, fetchGroupSchedule]);

    const handleViewToggle = () => {
        setView((prevView) => (prevView === "tabelar" ? "grafic" : "tabelar"));
    };

    const handleToggleAccordion = (group) => {
        setExpandedGroups((prevState) => ({
            ...prevState,
            [group]: !prevState[group],
        }))
    }


    return (
        <Layout>
            <div className="page-container-gt">
                <div className="view-toggle">
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={view === "grafic"}
                            onChange={handleViewToggle}
                        />
                        <span className="slider"></span>
                    </label>
                    <p>{view === "tabelar" ? "Format Tabelar" : "Format Grafic"}</p>
                </div>
                {groupSchedules.length > 0 ? (
                    <>
                        {groupSchedules.map((schedule) => {
                            const isExpanded = expandedGroups[schedule.group] || false;

                            return (
                                <div key={schedule.group} className="accordion-item-gt">
                                    <div
                                        className="accordion-header-gt"
                                        onClick={() => handleToggleAccordion(schedule.group)}
                                    >
                                        <h2>
                                            {schedule.group === "Orarul tau"
                                                ? "Orarul tau"
                                                : `Grupa ${schedule.group}`}
                                        </h2>
                                        <span className="accordion-icon-gt">
                      {isExpanded ? "-" : "+"}
                    </span>
                                    </div>
                                    {isExpanded && (
                                        <div className="accordion-content-gt">
                                            {view === "tabelar" ? (
                                                <GroupsScheduleTabelar
                                                    scheduleData={schedule.scheduleData}
                                                    group={schedule.group}
                                                    showHeader={false}
                                                />
                                            ) : (
                                                <GroupsScheduleGrafic
                                                    scheduleData={schedule.scheduleData}
                                                    group={schedule.group}
                                                />
                                            )}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </>
                ) : (
                    <p>Loading schedules...</p>
                )}
            </div>
        </Layout>
    );
};

export default GroupsSchedule;
