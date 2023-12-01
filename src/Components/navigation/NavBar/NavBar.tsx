import React from "react";
import style from "./Navbar.module.css";
import SignUp from "../../SignUp/SignUp";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../hooks/reduxHooks";
import Button from "../../common/Button/Button";

const NavBar = () => {
	const isAuth = useAppSelector((state) => state.authorisation.isAuth);
	return (
		<div className={style["wrapper"]}>
			<nav className={style["_"]}>
				<ul className={style["_list"]}>
					<li>
						<Link to="/recipes/">Все рецепты</Link>
					</li>
					<li>
						<Link to="/cuisine/">Кухни</Link>
					</li>
					{isAuth && (
						<li>
							<Link to="/recipes/add">Добавить</Link>
						</li>
					)}
				</ul>
			</nav>

			<SignUp />
		</div>
	);
};

export default NavBar;
