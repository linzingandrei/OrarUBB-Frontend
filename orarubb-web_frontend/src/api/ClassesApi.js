import { apiSlice } from "./ApiSlice";

export const classesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getClassesForGroup: builder.query({
      query: ({ groupCode, language }) =>
        `/classes/group/${groupCode}/${language}`,
      providesTags: ["classesCache"],
      keepUnusedDataFor: 1000,
    }),
  }),
});

export const { useLazyGetClassesForGroupQuery } = classesApi;
