import React from "react";
import Button from "../common/Button/Button";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setIsAuth } from "../../store/Slices/authorisationSlice";

const SignUp = () => {
	const isAuth = useAppSelector((state) => state.authorisation.isAuth);
	const dispatch = useAppDispatch();
	return (
		<Button onClick={() => dispatch(setIsAuth({ isAuth: !isAuth }))}>
			{isAuth ? "Выйти" : "Войти"}
		</Button>
	);
};

export default SignUp;
