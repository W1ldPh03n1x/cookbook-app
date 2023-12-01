import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Category, DishOutput } from "../../types";

interface RecipePageState {
	categories: Category[];
	shortedDishes: DishOutput[];
}

const initialState: RecipePageState = {
	categories: [],
	shortedDishes: [],
};

const recipePageSlice = createSlice({
	name: "recipePage",
	initialState,
	reducers: {
		setCategories: (state, action: PayloadAction<{ categories: Category[] }>) => {
			state.categories = action.payload.categories;
		},
		setRecipesShort: (state, action: PayloadAction<{ dishes: DishOutput[] }>) => {
			state.shortedDishes = action.payload.dishes;
		},
	},
});

export const { setCategories, setRecipesShort } = recipePageSlice.actions;

export default recipePageSlice.reducer;
