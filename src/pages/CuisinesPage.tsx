import React, { useEffect } from "react";
import PageLayout from "../Components/common/PageLayout";
import Cuisines from "../Components/modules/Cuisines/Cuisines";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { fetchCuisines } from "../utils/fetches";
import { setCuisines } from "../store/Slices/cuisinesSlice";

const CuisinesPage = () => {
	const cuisines = useAppSelector((state) => state.cuisines.cuisines);
	const dispatch = useAppDispatch();

	useEffect(() => {
		fetchCuisines()
			.then((data) => {
				dispatch(setCuisines({ cuisines: data }));
			})
			.catch(console.error);
	}, []);

	return (
		<PageLayout>
			<PageLayout.Title>Кухни мира</PageLayout.Title>
			<PageLayout.Container>
				<Cuisines cuisines={cuisines} />
			</PageLayout.Container>
		</PageLayout>
	);
};

export default CuisinesPage;
