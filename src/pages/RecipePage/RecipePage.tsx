import React from "react";
import { Link, useParams } from "react-router-dom";
import { Dish } from "../../types";
import { fetchDishInfo } from "../../utils/fetches";
import PageLayout from "../../Components/common/PageLayout";

import styles from "./RecipePage.module.css";
import IngredientList from "../../Components/common/IngredientList/IngredientList";
import { useAppSelector } from "../../hooks/reduxHooks";

const RecipePage = () => {
	const isAuth = useAppSelector((state) => state.authorisation.isAuth);

	const { id } = useParams();

	const [dishInfo, setDishInfo] = React.useState<Dish | null>(null);

	React.useEffect(() => {
		if (typeof id !== "undefined")
			fetchDishInfo(Number(id))
				.then((dish) => {
					setDishInfo(dish);
					console.log(dish);
				})
				.catch(console.error);
	}, []);

	return (
		<div className={styles["_"]}>
			<PageLayout.Title
				title={dishInfo?.name || "Загрузка..."}
				widget={
					isAuth && (
						<div className={styles["_edit_button__wrapper"]}>
							<Link to={`edit`} className={styles["_edit_button"]}>
								Редактировать рецепт <span>&#9998;</span>
							</Link>
						</div>
					)
				}
			/>
			<PageLayout.Container direction="column">
				<PageLayout.Section>
					<div className={styles["_about"]}>
						<div className={styles["_about__wrapper"]}>
							<div className={styles["_required"]}>
								<div className={styles["_about__heading"]}>
									<span>Ингредиенты</span>
								</div>

								<div className={styles["_required__wrapper"]}>
									<IngredientList ingredientList={dishInfo?.ingredients} />
								</div>
							</div>

							<div className={styles["_includes"]}>
								<div className={styles["_about__heading"]}>
									<span>Пищевая ценность</span>
								</div>

								<ul className={styles["_includes__list"]}>
									<li>Белки: {dishInfo?.dish_protein} г</li>
									<li>Жиры: {dishInfo?.dish_fats} г</li>
									<li>Углеводы: {dishInfo?.dish_carbohydrates} г</li>
								</ul>
							</div>
						</div>
						<div className={styles["_cooking_time"]}>
							<strong>Общее время приготовления: </strong>
							<span className={styles["_cooking_time__duration"]}>
								{dishInfo?.time} мин
							</span>
						</div>
					</div>
				</PageLayout.Section>

				<PageLayout.Section>
					<div className={styles["_description"]}>
						<h2>Описание </h2>

						<p>{dishInfo?.description}</p>
					</div>
				</PageLayout.Section>

				<PageLayout.Section>
					<h2>Рецепт</h2>
					<p className={styles["_recipe"]}>{dishInfo?.recipe}</p>
				</PageLayout.Section>
			</PageLayout.Container>
		</div>
	);
};

export default RecipePage;
