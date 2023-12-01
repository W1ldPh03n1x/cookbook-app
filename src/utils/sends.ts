import axios from "axios";
import { DishEditing, DishOutput } from "../types";

export const sendDishUpdate = async (dish: DishEditing) => {
	try {
		const response = await axios.put(`http://localhost:8080/dish/${dish.id}`, dish);
		return response.data;
	} catch (err) {
		return Promise.reject(err);
	}
};

export const sendDeleteDish = async (id: number) => {
	try {
		const response = await axios.delete(`http://localhost:8080/dish/${id}`);
		return response.data;
	} catch (err) {
		return Promise.reject(err);
	}
};

export const sendAddDish = async (dish: DishEditing) => {
	try {
		const response = await axios.post(`http://localhost:8080/dish/`, dish);
		return response.data;
	} catch (err) {
		return Promise.reject(err);
	}
};
