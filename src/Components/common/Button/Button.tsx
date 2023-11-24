import React, { MouseEventHandler } from "react";
import styles from "./Button.module.css";

const Button = ({
	children,
	onClick,
}: {
	children: React.ReactNode;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}) => {
	return (
		<button
			className={[styles["_filled"], styles["_"]].join(" ")}
			onClick={onClick ? onClick : () => {}}
		>
			{children}
		</button>
	);
};

export default Button;
