import React from "react";
import CategoryTitle from "./CategoryTitle";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { DishOutput } from "../../../types";
import { fetchDishes, fetchDishesByCategory } from "../../../utils/fetches";
import Card from "./Card";

import styles from "./Recipes.module.css";
import { useParams } from "react-router-dom";

const Section = ({
	children,
	title,
	categoryId,
	specific = false,
}: {
	children?: React.ReactNode;
	title?: string;
	categoryId?: number;
	specific?: boolean;
}) => {
	const [dishes, setDishes] = React.useState<DishOutput[]>([]);

	const { id } = useParams();

	React.useEffect(() => {
		if (typeof categoryId !== "undefined") {
			const options: { categoryId?: number; cuisineId?: number } = { categoryId };
			if (typeof id !== "undefined") options["cuisineId"] = Number(id);
			fetchDishes(options).then(setDishes).catch(console.error);
			// fetchDishesByCategory(categoryId).then(setDishes).catch(console.error);
		} else if (!children) {
			console.error("Recipe.Section: categoryId is undefined");
		}
	}, [specific]);

	return (
		<section className={styles["_section"]}>
			{title && <CategoryTitle id={categoryId}>{title}</CategoryTitle>}
			<div className={styles["_wrapper"]}>
				{children ? (
					children
				) : dishes ? (
					dishes.map((dish, i) => <Card key={i} dish={dish} />)
				) : (
					<p>Ничего не найдено</p>
				)}
			</div>
		</section>
	);
};
export default Section;
