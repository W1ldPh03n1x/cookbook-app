import React from "react";
import styles from "./PageLayout.module.css";

const Container = ({
	children,
	direction = "column",
}: {
	children?: React.ReactNode;
	direction?: "column" | "row";
}) => {
	return (
		<div className={[styles["_container"], styles[`_container--${direction}`]].join(" ")}>
			{children}
		</div>
	);
};

export default Container;
