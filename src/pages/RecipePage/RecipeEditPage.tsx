import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageLayout from "../../Components/common/PageLayout";
import { Dish, DishEditing, Ingredient } from "../../types";
import { fetchDishInfo } from "../../utils/fetches";

import styles from "./RecipePage.module.css";
import IngredientList from "../../Components/common/IngredientList/IngredientList";
import Button from "../../Components/common/Button/Button";
import { sendAddDish, sendDeleteDish, sendDishUpdate } from "../../utils/sends";

const RecipeEditPage = ({ add = false }: { add?: boolean }) => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [dishInfo, setDishInfo] = React.useState<Dish | null>(null);
	const [updatedDishInfo, setUpdatedDishInfo] = React.useState<DishEditing | null>(null);
	const [newIngredient, setNewIngredient] = React.useState<Ingredient>({
		name: "",
		measure_unit: "",
		quantity: 1,
		ingredient_protein: 0,
		ingredient_fats: 0,
		ingredient_carbohydrates: 0,
	});

	React.useEffect(() => {
		if (typeof id !== "undefined")
			fetchDishInfo(Number(id))
				.then((dish) => {
					setDishInfo(dish);
					setUpdatedDishInfo(dish);
					console.log(dish);
				})
				.catch(console.error);
		else
			setDishInfo({
				id: 0,
				name: "",
				category_id: 1,
				cousine_id: 1,
				description: "",
				recipe: "",
				time: 0,
				dish_protein: 0,
				dish_fats: 0,
				dish_carbohydrates: 0,
				kilocalories: 0,
				ingredients: [],
			});
		setUpdatedDishInfo({
			name: "",
			category_id: 1,
			cousine_id: 1,
			description: "",
			recipe: "",
			time: 0,
			dish_protein: 0,
			dish_fats: 0,
			dish_carbohydrates: 0,
			kilocalories: 0,
			ingredients: [],
		});
	}, []);

	const handleIngredientDelete = (event: any) => {
		const { value } = event.target;
		setUpdatedDishInfo({
			...updatedDishInfo,
			ingredients:
				updatedDishInfo?.ingredients?.filter((ingredient) => ingredient.name !== value) ||
				[],
		});
	};

	const handleNewIngredientAdding = () => {
		setUpdatedDishInfo({
			...updatedDishInfo,
			ingredients: [...(updatedDishInfo?.ingredients || []), newIngredient],
		});
		setNewIngredient({
			name: "",
			measure_unit: "",
			quantity: 1,
			ingredient_protein: 0,
			ingredient_fats: 0,
			ingredient_carbohydrates: 0,
		});
	};

	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = event.target;
		let newValue: string | number = value;
		if (name === "time") newValue = Number(value);
		setUpdatedDishInfo({
			...updatedDishInfo,
			ingredients: updatedDishInfo?.ingredients || [],
			[name]: newValue,
		});
		// @ts-ignore
		// if (updatedDishInfo) console.log(updatedDishInfo[name]);
		// if (updatedDishInfo) console.log(value);
	};

	const handleSaveEditing = () => {
		console.log(updatedDishInfo);
		if (updatedDishInfo)
			sendDishUpdate(updatedDishInfo)
				.then(console.log)
				.then(() => {
					navigate(`../${updatedDishInfo?.id}`);
				})
				.catch(console.error);
	};

	const handleDeleteRecipe = () => {
		console.log("Удаляю рецепт");
		if (updatedDishInfo?.id)
			sendDeleteDish(updatedDishInfo?.id).then(() => {
				navigate(`../`);
			});
	};

	const handleAddRecipe = (event: any) => {
		console.log("Добавляю рецепт");
		console.log(updatedDishInfo);
		if (updatedDishInfo) sendAddDish(updatedDishInfo).then(console.log).catch(console.error);
		navigate(`../`);
	};

	return (
		<div className={styles["_"]}>
			<PageLayout.Title widget={"Редактирование"}>
				<input
					className={styles["_name--editing"]}
					type="text"
					name="name"
					id="name"
					placeholder="Название рецепта"
					value={updatedDishInfo?.name}
					onChange={handleInputChange}
				/>{" "}
				&#9998;
			</PageLayout.Title>
			<PageLayout.Container direction="column">
				<PageLayout.Section>
					<div className={styles["_about"]}>
						<div className={styles["_about__wrapper"]}>
							<div className={styles["_required"]}>
								<div className={styles["_about__heading"]}>
									<span>Ингредиенты</span>
								</div>

								<div className={styles["_required__wrapper"]}>
									<IngredientList
										ingredientList={updatedDishInfo?.ingredients}
										specifics
										editing
										onItemClick={handleIngredientDelete}
									/>
									<div className={styles["_add_ingredient__wrapper"]}>
										<div className={styles["_add_ingredient__info"]}>
											<span>
												<input
													type="text"
													placeholder="Название ингредиента"
													name="ingredient_name"
													id={styles["ingredient_name"]}
													value={newIngredient.name}
													onChange={(event) => {
														setNewIngredient({
															...newIngredient,
															name: event.target.value,
														});
													}}
												/>{" "}
												<input
													type="number"
													placeholder="1"
													min={1}
													name="ingredient_quantity"
													id={styles["ingredient_quantity"]}
													value={newIngredient.quantity}
													onChange={(event) => {
														setNewIngredient({
															...newIngredient,
															quantity: Number(event.target.value),
														});
													}}
												/>
												<input
													type="text"
													placeholder="Ед. изм."
													name="ingredient_measure_unit"
													id={styles["ingredient_measure_unit"]}
													value={newIngredient.measure_unit}
													onChange={(event) => {
														setNewIngredient({
															...newIngredient,
															measure_unit: event.target.value,
														});
													}}
												/>
											</span>

											<span className={styles["_add_ingredient__specifics"]}>
												<span>&crarr;</span>

												<span>
													Белки:{" "}
													<input
														type="number"
														placeholder="1"
														min={0}
														name="ingredient_ingredient_protein"
														id={styles["ingredient_ingredient_protein"]}
														value={newIngredient.ingredient_protein}
														onChange={(event) => {
															setNewIngredient({
																...newIngredient,
																ingredient_protein: Number(
																	event.target.value,
																),
															});
														}}
													/>
													г
												</span>
												<span>
													Жиры:{" "}
													<input
														type="number"
														placeholder="1"
														min={0}
														name="ingredient_ingredient_fats"
														id={styles["ingredient_ingredient_fats"]}
														value={newIngredient.ingredient_fats}
														onChange={(event) => {
															setNewIngredient({
																...newIngredient,
																ingredient_fats: Number(
																	event.target.value,
																),
															});
														}}
													/>
													г
												</span>
												<span>
													Углеводы:{" "}
													<input
														type="number"
														placeholder="1"
														min={0}
														name="ingredient_ingredient_carbohydrates"
														id={
															styles[
																"ingredient_ingredient_carbohydrates"
															]
														}
														value={
															newIngredient.ingredient_carbohydrates
														}
														onChange={(event) => {
															setNewIngredient({
																...newIngredient,
																ingredient_carbohydrates: Number(
																	event.target.value,
																),
															});
														}}
													/>
													г
												</span>
											</span>
										</div>
										<Button onClick={() => handleNewIngredientAdding()}>
											Добавить
										</Button>
									</div>
								</div>
							</div>
						</div>

						<div className={styles["_cooking_time"]}>
							<strong>Общее время приготовления:</strong>{" "}
							<input
								className={[
									styles["_cooking_time__duration"],
									styles["_cooking_time__duration--editing"],
								].join(" ")}
								type="number"
								placeholder="Время приготовления"
								name="time"
								id="time"
								value={updatedDishInfo?.time}
								onChange={handleInputChange}
							/>{" "}
							<span className={styles["_cooking_time__duration"]}>мин &#9998;</span>
						</div>
					</div>
				</PageLayout.Section>

				<PageLayout.Section>
					<div className={styles["_description"]}>
						<h2>Описание </h2>
						<textarea
							className={styles["_description--editing"]}
							name="description"
							id="description"
							rows={5}
							placeholder="Описание рецепта"
							value={updatedDishInfo?.description}
							onChange={handleInputChange}
						/>
					</div>
				</PageLayout.Section>

				<PageLayout.Section>
					<h2>Рецепт</h2>
					{/* <p className={styles["_recipe"]}>{dishInfo?.recipe}</p> */}
					<textarea
						className={styles["_recipe--editing"]}
						name="recipe"
						id="recipe"
						rows={12}
						placeholder="Сам рецепт"
						value={updatedDishInfo?.recipe}
						onChange={handleInputChange}
					/>
				</PageLayout.Section>
				<PageLayout.Section>
					{add ? (
						<Button onClick={handleAddRecipe}>Добавить рецепт</Button>
					) : (
						<>
							<Button onClick={handleSaveEditing}>Сохранить</Button>
							&emsp;
							<Button onClick={handleDeleteRecipe}>Удалить рецепт</Button>
						</>
					)}
				</PageLayout.Section>
			</PageLayout.Container>
		</div>
	);
};

export default RecipeEditPage;
