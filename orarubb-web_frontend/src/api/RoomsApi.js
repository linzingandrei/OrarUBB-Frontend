import { apiSlice } from "./ApiSlice";

export const roomsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllRooms: builder.query({
      query: () => `/rooms/`,
      providesTags: ["roomsCache"],
      keepUnusedDataFor: 1000,
    }),
    getRoomsSchedules: builder.query({
      query: (language) => `/rooms/rooms-schedule/${language}`,
      providesTags: ["roomsSchedulesCache"],
      keepUnusedDataFor: 1000,
    })
  }),
});

export const { useGetAllRoomsQuery, useGetRoomsSchedulesQuery } = roomsApi;
