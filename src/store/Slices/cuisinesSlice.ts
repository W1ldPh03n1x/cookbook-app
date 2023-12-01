import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Cuisine } from "../../types";

interface CuisinesSlice {
	cuisines: Cuisine[];
}

const initialState: CuisinesSlice = {
	cuisines: [],
};

const cuisinesSlice = createSlice({
	name: "cuisines",
	initialState,
	reducers: {
		setCuisines: (state, action: PayloadAction<{ cuisines: Cuisine[] }>) => {
			state.cuisines = action.payload.cuisines;
		},
	},
});

export const { setCuisines } = cuisinesSlice.actions;

export default cuisinesSlice.reducer;
