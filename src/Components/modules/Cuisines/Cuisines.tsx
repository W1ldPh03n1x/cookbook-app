import React from "react";
import { Cuisine } from "../../../types";
import Card from "./Card";

import styles from "./Cuisines.module.css";

const Cuisines = ({ cuisines = [] }: { cuisines?: Cuisine[] }) => {
	return (
		<div className={styles["_"]}>
			{cuisines.map((cuisine) => (
				<Cuisines.Card key={cuisine.id} cuisine={cuisine} />
			))}
		</div>
	);
};

Cuisines.Card = Card;

export default Cuisines;
