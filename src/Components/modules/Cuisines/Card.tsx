import React from "react";
import { Cuisine } from "../../../types";
import { Link } from "react-router-dom";

import styles from "./Cuisines.module.css";

const Card = ({ cuisine }: { cuisine: Cuisine }) => {
	return (
		<article className={styles["card"]}>
			<Link to={`${cuisine.id}`}>
				<div className={styles["card__wrapper"]}>
					<div className={styles["card__title"]}>
						<span>{cuisine.name}</span>
					</div>
					<div className={styles["card__description"]}>
						<span>{cuisine.description}</span>
					</div>
				</div>
			</Link>
		</article>
	);
};

export default Card;
