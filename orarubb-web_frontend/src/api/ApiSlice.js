import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
  endpoints: () => ({}),
  tagTypes: [
    "teachersCache",
    "coursesCache",
    "roomsCache",
    "classesCache",
    "groupsCache",
    "classesForTeacherCache",
  ],
});
