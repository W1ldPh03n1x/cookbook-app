import React from "react";
import { Ingredient } from "../../../types";
import styles from "./IngredientList.module.css";

const Item = ({
	ingredient,
	specifics = false,
	editing = false,
	onClick = () => {},
}: {
	ingredient: Ingredient;
	specifics?: boolean;
	editing?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
	return (
		<li data-name={ingredient.name} className={styles["_item"]}>
			<div className="_item__wrapper">
				<span className={styles["_item__name"]}>{ingredient.name}:</span>
				<span className={styles["_item__amount"]}>
					{" "}
					{ingredient.quantity} {ingredient.measure_unit}
				</span>
				{specifics && (
					<span className={styles["_item__specifics"]}>
						<span>&crarr;</span>
						<span>Белки: {ingredient.ingredient_protein} г </span>
						<span>Жиры: {ingredient.ingredient_fats} г </span>
						<span>Углеводы: {ingredient.ingredient_carbohydrates} г </span>
					</span>
				)}
			</div>
			{editing && (
				<button value={ingredient.name} onClick={onClick}>
					удалить
				</button>
			)}
		</li>
	);
};

export default Item;
