import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import counterSlice from "./features/counter/counterSlice";
const store = configureStore({
    reducer: {
        counter: counterSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
