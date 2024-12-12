import { useState } from "react";
import "./GroupsSchedule.scss";
import GroupsScheduleTabelar from "../../components/groupsSchedule/GroupsScheduleTabelar";
import GroupsScheduleGrafic from "../../components/groupsSchedule/GroupsScheduleGrafic";
import Layout from "../../components/layout/Layout";
import { useParams } from "react-router-dom";
import { useGetIdForAcademicSpecializationAbbreviationQuery } from "../../api/AcademicSpecializationsApi";
import { useGetAllGroupsWithAcademicSpecializationIdAndYearQuery } from "../../api/GroupsApi";
import { useEffect } from "react";
import { useLazyGetClassesForGroupQuery } from "../../api/ClassesApi";

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
  { group: 931, scheduleData: scheduleForGroup931 },
  { group: 932, scheduleData: scheduleForGroup932 },
];

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
  const { abbreviation, groupYear } = useParams();
  const [groupSchedules, setGroupSchedules] = useState([]);
  const [academicSpecializationId, setAcademicSpecializationId] = useState(0);
  const [year, setYear] = useState(1);
  const [groupsList, setGroupsList] = useState(null);

  const { data: academicSpecId } =
    useGetIdForAcademicSpecializationAbbreviationQuery(abbreviation);

  useEffect(() => {
    if (academicSpecId) {
      setAcademicSpecializationId(academicSpecId);
    }
    if (groupYear) {
      setYear(parseInt(groupYear, 10));
    }
  }, [academicSpecId, groupYear]);

  const isParamsReady = academicSpecializationId && year;
  const {
    data: groupsData,
    error,
    isLoading,
  } = useGetAllGroupsWithAcademicSpecializationIdAndYearQuery({
    academicSpecializationId: academicSpecializationId,
    year: year,
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
    console.log("groupsList", groupsList);
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

              return { group: group, scheduleData: sortedScheduleData };
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

  return (
    <Layout>
      <div className="page-container">
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
          (console.log(groupSchedules),
          groupSchedules.map((schedule) =>
            view === "tabelar" ? (
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
          ))
        ) : (
          <p>Loading schedules...</p>
        )}
      </div>
    </Layout>
  );
};

export default GroupsSchedule;
