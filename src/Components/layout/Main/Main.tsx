import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./Main.module.css";

const Main = ({ children }: { children?: React.ReactNode }) => {
	return (
		<main className={styles["container"]}>
			<div className={[styles["content"], styles["content__medium"]].join(" ")}>
				<Outlet />
			</div>
		</main>
	);
};

export default Main;
