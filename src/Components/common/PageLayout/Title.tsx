import React from "react";

import styles from "./PageLayout.module.css";

const Title = ({
	children,
	title,
	widget,
}: {
	children?: React.ReactNode;
	title?: string;
	widget?: React.ReactNode;
}) => {
	return (
		<div className={styles["_title"]}>
			<h1>{children || title}</h1>
			<div className={styles["_title__widget"]}>{widget}</div>
		</div>
	);
};

export default Title;
