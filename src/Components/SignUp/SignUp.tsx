import React from "react";
import Button from "../common/Button/Button";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setIsAuth } from "../../store/authorisationSlice";

const SignUp = () => {
	const dispatch = useAppDispatch();
	return <Button onClick={() => dispatch(setIsAuth({ isAuth: true }))}>Войти</Button>;
};

export default SignUp;
