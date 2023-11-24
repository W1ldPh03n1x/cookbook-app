import React from "react";
import styles from "./Container.module.css";
const Container = ({
	children,
	size = "medium",
}: {
	children: React.ReactNode;
	size?: "small" | "medium" | "large";
}) => {
	return <main className={[styles[`_${size}`], styles["_"]].join(" ")}>{children}</main>;
};

export default Container;
