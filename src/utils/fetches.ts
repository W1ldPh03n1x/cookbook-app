import axios from "axios";
import { Category, Cuisine, CuisineInfo, Dish, DishOutput } from "../types";

export const fetchCategoriesList = async () => {
	try {
		const response = await axios.get<Category[]>(`http://localhost:8080/category/`);
		return response.data;
	} catch (err) {
		return Promise.reject(err);
	}
};

export const fetchDishesByCategory = async (id: number) => {
	try {
		const response = await axios.get<DishOutput[]>(`http://localhost:8080/dish/category/${id}`);
		return response.data;
	} catch (err) {
		return Promise.reject(err);
	}
};

export const fetchCuisines = async () => {
	try {
		const response = await axios.get<Cuisine[]>(`http://localhost:8080/cousine/`);
		return response.data;
	} catch (err) {
		return Promise.reject(err);
	}
};

export const fetchDishes = async ({
	categoryId,
	cuisineId,
}: {
	categoryId?: number;
	cuisineId?: number;
}) => {
	let url =
		"http://localhost:8080/dish" +
		(cuisineId ? "/cousine" : "") +
		(categoryId ? "/category" : "") +
		(cuisineId ? `/${cuisineId}` : "") +
		(categoryId ? `/${categoryId}` : "");

	try {
		const response = await axios.get<DishOutput[]>(url);
		return response.data;
	} catch (err) {
		return Promise.reject(err);
	}
};

export const fetchDishInfo = async (id: number) => {
	try {
		const response = await axios.get<Dish>(`http://localhost:8080/dish/${id}`);
		return response.data;
	} catch (err) {
		return Promise.reject(err);
	}
};

export const searchDish = async (query: string) => {
	try {
		const response = await axios.get<DishOutput[]>(
			`http://localhost:8080/dish/search/${query}`,
		);
		return response.data;
	} catch (err) {
		return Promise.reject(err);
	}
};
