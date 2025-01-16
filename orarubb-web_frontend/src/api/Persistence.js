import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {apiSlice} from "./ApiSlice.js";
import storage from "redux-persist/lib/storage"
import {persistReducer, persistStore} from "redux-persist";
const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
});

const persistConfig = {
    key: "root",
    storage,
    debug: true,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(apiSlice.middleware),
});

export const persistor = persistStore(store)