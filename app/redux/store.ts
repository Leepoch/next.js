import { configureStore } from "@reduxjs/toolkit";
import { tasksApi } from "./services/tasksApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [tasksApi.reducerPath]: tasksApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(tasksApi.middleware),
});

setupListeners(store.dispatch);