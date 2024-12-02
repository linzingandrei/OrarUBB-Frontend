import { apiSlice } from "./ApiSlice";

export const roomsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllRooms: builder.query({
      query: () => `/rooms/`,
      providesTags: ["roomsCache"],
      keepUnusedDataFor: 1000,
    }),
  }),
});

export const { useGetAllRoomsQuery } = roomsApi;
