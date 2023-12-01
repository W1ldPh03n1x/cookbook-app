import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import styles from "./AppLayout.module.css";
import Container from "../Main/Main";
import { Outlet } from "react-router-dom";

const AppLayout = ({ search = true, navbar = true }: { search?: boolean; navbar?: boolean }) => {
	return (
		<div className={styles["_main"]}>
			<Header search={search} navbar={navbar} />
			<Container>
				<Outlet />
			</Container>
		</div>
	);
};

export default AppLayout;
