import React from "react";
import dishImg from "../../../static/dish_image_placeholder.png";
import { DishOutput } from "../../../types";
// import dishImg from "../../static/dish_test_img.jpg";

import styles from "./Recipes.module.css";
import { Link } from "react-router-dom";

const Card = ({ dish }: { dish: DishOutput }) => {
	return (
		<article className={styles["card"]}>
			<Link to={`/recipes/${dish.id}`}>
				<div className={styles["card__wrapper"]}>
					{/* <img src={dishImg} alt="Изображение блюда" className={styles["card__image"]} /> */}
					{/* <div
				className={styles["card__image"]}
			></div> */}

					<header className={styles["card__header"]}>
						<span className={styles["card__title"]}>{dish.name}</span>
						<div className={styles["cooking_time"]}>{dish.time} мин</div>
					</header>
				</div>
			</Link>
		</article>
	);
};

export default Card;
