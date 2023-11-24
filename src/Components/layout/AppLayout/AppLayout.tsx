import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import styles from "./AppLayout.module.css";

const AppLayout = ({ search = true, navbar = true }: { search?: boolean; navbar?: boolean }) => {
	return (
		<div className={styles["_main"]}>
			<Header search={search} navbar={navbar} />
			<Main />
		</div>
	);
};

export default AppLayout;
