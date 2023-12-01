import { configureStore } from "@reduxjs/toolkit";
import authorisationReducer from "./Slices/authorisationSlice";
import recipesSliceReducer from "./Slices/recipesSlice";
import cuisinesReducer from "./Slices/cuisinesSlice";

const store = configureStore({
	reducer: {
		authorisation: authorisationReducer,
		recipes: recipesSliceReducer,
		cuisines: cuisinesReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
