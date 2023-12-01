export interface Ingredient {
	name: string;
	measure_unit: string;
	quantity: number;
	ingredient_protein: number;
	ingredient_fats: number;
	ingredient_carbohydrates: number;
}

export interface Dish {
	id: number;
	name: string;
	category_id: number;
	cousine_id: number;
	description: string;
	recipe: string;
	time: number;
	dish_protein: number;
	dish_fats: number;
	dish_carbohydrates: number;
	kilocalories: number;
	ingredients: Ingredient[];
}

export interface DishEditing {
	id?: number;
	name?: string;
	category_id?: number;
	cousine_id?: number;
	description?: string;
	recipe?: string;
	time?: number;
	dish_protein?: number;
	dish_fats?: number;
	dish_carbohydrates?: number;
	kilocalories?: number;
	ingredients: Ingredient[];
}

export interface Cuisine {
	id: number;
	name: string;
	description: string;
}

export interface Category {
	id: number;
	name: string;
	description: string;
}

// Updated shortened structure for displaying a list of dishes
export interface DishOutput {
	id: number;
	name: string;
	description: string;
	time: number;
}

// Updated shortened structure for adding a category
export interface CategoryInfo {
	name: string;
	description: string;
}

// Updated shortened structure for adding a cuisine
export interface CuisineInfo {
	name: string;
	description: string;
}
