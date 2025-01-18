import { apiSlice } from "./ApiSlice";

export const coursesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCourseInstancesByLanguage: builder.query({
      query: (language) => `/course-instances/${language}`,
      providesTags: ["coursesCache"],
      keepUnusedDataFor: 1000,
    }),

    getClassesForCourse: builder.query({
      query: ({ course_code, language }) =>
        `/classes/${course_code}/${language}`,
      providesTags: ["classesForCourseCache"],
      keepUnusedDataFor: 1000,
    }),

    getCourseNameForCode: builder.query({
      query: (course_code) => `/course-instances/course-name/${course_code}`,
      providesTags: ["coursesCache"],
      keepUnusedDataFor: 1000,
    }),
  }),
});

export const {
  useGetAllCourseInstancesByLanguageQuery,
  useGetClassesForCourseQuery,
} = coursesApi;
