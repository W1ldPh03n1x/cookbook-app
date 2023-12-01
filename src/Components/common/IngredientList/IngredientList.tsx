import React from "react";
import { Ingredient } from "../../../types";
import Item from "./Item";

import styles from "./IngredientList.module.css";

const IngredientList = ({
	ingredientList = [],
	specifics = false,
	editing = false,
	onItemClick = () => {},
}: {
	ingredientList?: Ingredient[];
	specifics?: boolean;
	editing?: boolean;
	onItemClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
	return (
		<div className={styles["_wrapper"]}>
			<ul className={styles["_list"]}>
				{ingredientList &&
					ingredientList.map((ingredient, i) => (
						<Item
							key={i}
							ingredient={ingredient}
							specifics={specifics}
							editing={editing}
							onClick={onItemClick}
						/>
					))}
			</ul>
		</div>
	);
};

IngredientList.Item = Item;

export default IngredientList;
