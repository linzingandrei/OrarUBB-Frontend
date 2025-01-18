import { apiSlice } from "./ApiSlice";

export const groupsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllGroupsWithAcademicSpecializationIdAndYear: builder.query({
      query: ({ academicSpecializationId, year }) =>
        `/groups/id/${academicSpecializationId}/${year}`,
      providesTags: ["groupsCache"],
      keepUnusedDataFor: 1000,
    }),
  }),
});

export const { useGetAllGroupsWithAcademicSpecializationIdAndYearQuery } =
  groupsApi;
