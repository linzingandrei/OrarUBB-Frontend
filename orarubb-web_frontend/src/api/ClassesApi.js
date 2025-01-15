import { apiSlice } from "./ApiSlice";

export const classesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getClassesForGroup: builder.query({
      query: ({ groupCode, language }) =>
        `/classes/group/${groupCode}/${language}`,
      providesTags: ["classesCache"],
      keepUnusedDataFor: 1000,
    }),
    getClassesForUser: builder.query({
      query: ({ userCode, language }) => `/user/classes/${userCode}/${language}`,
      providesTags: ["classesCache"],
      keepUnusedDataFor: 1000,
    })
  }),
});

export const { useGetClassesForGroupQuery, useLazyGetClassesForGroupQuery, useGetClassesForUserQuery } = classesApi;
