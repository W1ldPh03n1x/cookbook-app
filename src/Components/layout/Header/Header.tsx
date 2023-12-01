import React from "react";
import NavBar from "../../navigation/NavBar/NavBar";
import Search from "../../Search/Search";
import Container from "../Main/Main";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../hooks/reduxHooks";
import SignUp from "../../SignUp/SignUp";

import styles from "./Header.module.css";

const Header = ({ search = false, navbar = false }: { search?: boolean; navbar?: boolean }) => {
	const isAuth = useAppSelector((state) => state.authorisation.isAuth);
	const [scrolled, setScrolled] = React.useState(false);
	window.onscroll = () => {
		setScrolled(window.scrollY > 0);
	};

	return (
		<header className={[styles["_"], scrolled ? styles["_scrolled"] : ""].join(" ")}>
			<div className={styles["wrapper"]}>
				<div className={styles["_logo-wrapper"]}>
					<span className={styles["_logo"]}>
						<Link to="/">CookBook</Link>
					</span>
				</div>

				{search && <Search />}

				{navbar && <NavBar />}

				{/* {isAuth ? "Авторизован" : <SignUp />} */}
			</div>
		</header>
	);
};

export default Header;
