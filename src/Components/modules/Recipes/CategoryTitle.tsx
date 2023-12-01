import React from "react";

import styles from "./Recipes.module.css";

const CategoryTitle = ({ children, id = 0 }: { children?: React.ReactNode; id?: number }) => {
	return (
		<h2>
			<div id={id.toString()} className={styles["_anchor"]}></div>
			{children}
		</h2>
	);
};

export default CategoryTitle;
