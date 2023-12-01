import React from "react";
import styles from "./Main.module.css";
const Main = ({
	children,
	size = "medium",
}: {
	children: React.ReactNode;
	size?: "small" | "medium" | "large";
}) => {
	return <main className={[styles[`_${size}`], styles["_"]].join(" ")}>{children}</main>;
};

export default Main;
