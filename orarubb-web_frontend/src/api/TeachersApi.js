import { apiSlice } from "./ApiSlice";

export const teachersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTeachersByLanguage: builder.query({
      query: (language) => `/teachers/${language}`,
      providesTags: ["teachersCache"],
      keepUnusedDataFor: 1000,
    }),
    getClassesForTeacher: builder.query({
      query: ({ teacher_code, language }) =>
        `/classes/teacher/${teacher_code}/${language}`,
      providesTags: ["classesForTeacherCache"],
      keepUnusedDataFor: 1000,
    }),
  }),
});

export const { useGetTeachersByLanguageQuery, useGetClassesForTeacherQuery } =
  teachersApi;
