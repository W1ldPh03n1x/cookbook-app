import { configureStore } from "@reduxjs/toolkit";
import authorisationReducer from "./authorisationSlice";

const store = configureStore({
	reducer: { authorisation: authorisationReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
