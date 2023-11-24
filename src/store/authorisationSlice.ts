import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthorisationSlice {
	isAuth: boolean;
}

const initialState: AuthorisationSlice = {
	isAuth: false,
};

const authorisationSlice = createSlice({
	name: "authorisation",
	initialState,
	reducers: {
		setIsAuth: (state, action: PayloadAction<{ isAuth: boolean }>) => {
			state.isAuth = action.payload.isAuth;
		},
	},
});

export const { setIsAuth } = authorisationSlice.actions;

export default authorisationSlice.reducer;
