import {apiSlice} from "./ApiSlice.js";

export const academicSpecializationsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAcademicSpecializationsBachelor: builder.query({
            query: (languageTag) => `/academic-specializations/L/${languageTag}`,
            providesTags: ["academicSpecializationsBachelorCache"],
            keepUnusedDataFor: 1000,
        }),
        getAcademicSpecializationsMaster: builder.query({
            query: (languageTag) => `/academic-specializations/M/${languageTag}`,
            providesTags: ["academicSpecializationsMasterCache"],
            keepUnusedDataFor: 1000,
        }),
    }),
});

export const {useGetAcademicSpecializationsBachelorQuery, useGetAcademicSpecializationsMasterQuery} = academicSpecializationsApi;