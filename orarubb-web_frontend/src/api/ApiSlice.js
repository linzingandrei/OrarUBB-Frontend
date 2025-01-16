import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  // If you want to run on mobile(locally) use your laptops ip address instead of localhost here!!!
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
  endpoints: () => ({}),
  tagTypes: [
    "teachersCache",
    "coursesCache",
    "roomsCache",
    "roomsSchedulesCache",
    "classesCache",
    "groupsCache",
    "classesForTeacherCache",
    "roomClassesCache",
    "academicSpecializationsBachelorCache",
    "academicSpecializationsMasterCache",
    "classesForCourseCache",
    "userClassesCache",
  ],
});
