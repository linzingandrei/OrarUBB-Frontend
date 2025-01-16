import {apiSlice} from "./ApiSlice.js"

export const userClassesApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getClassesForUser: builder.query({
            query: ({ userCode, language }) => `/user/classes/${userCode}/${language}`,
            providesTags: ["userClassesCache"],
            keepUnusedDataFor: 1000,
        }),
        mapGroupCoursesToUser: builder.mutation({
            query: ({userId, group}) => ({
                url: `user/classes/${userId}/${group}`,
                method: 'POST'
            }),
            invalidatesTags: ["userClassesCache"],
        })
    })
})

export const { useGetClassesForUserQuery, useMapGroupCoursesToUserMutation } = userClassesApi