import React from "react";
import { fetchCategoriesList } from "../../../utils/fetches";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { setCategories } from "../../../store/Slices/recipesSlice";
import styles from "./CategoriesBar.module.css";
import { Category } from "../../../types";

const CategoriesBar = ({ categoryList = [] }: { categoryList?: Category[] }) => {
	return (
		<nav className={styles["_"]}>
			<div className={styles["_wrapper"]}>
				<h3>Категории</h3>
				<ul>
					{categoryList.map((category, i) => (
						<a key={i} href={`#${category.id}`}>
							<li className={styles["_item"]}>{category.name}</li>
						</a>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default CategoriesBar;
