import React from "react";
import Main from "../Components/layout/Main/Main";
import styles from "./CategoriesPage.module.css";
import { Recipes } from "../Components/modules/Recipes";
import CategoriesBar from "../Components/layout/CategoriesBar/CategoriesBar";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { setCategories } from "../store/Slices/recipesSlice";
import { fetchCategoriesList } from "../utils/fetches";
import PageLayout from "../Components/common/PageLayout";
import { useParams } from "react-router-dom";

const CategoriesPage = ({
	cuisineId,
	specific = false,
}: {
	cuisineId?: number;
	specific?: boolean;
}) => {
	const dispatch = useAppDispatch();
	const categoryList = useAppSelector((state) => state.recipes.categories);
	const cuisineList = useAppSelector((state) => state.cuisines.cuisines);

	const { id } = useParams();

	React.useEffect(() => {
		fetchCategoriesList()
			.then((data) => {
				dispatch(setCategories({ categories: data }));
				console.log("Категории:", data);
			})
			.catch(console.error);
	}, []);

	return (
		<PageLayout>
			<PageLayout.Title>
				{specific
					? cuisineList.find((cuisine) => cuisine.id === Number(id))?.name
					: "Все рецепты"}
			</PageLayout.Title>
			<PageLayout.Container direction="row">
				<CategoriesBar categoryList={categoryList} />
				<Recipes>
					{categoryList.map((category, i) => (
						<Recipes.Section
							key={i}
							title={category.name}
							categoryId={category.id}
							specific={specific}
						/>
					))}
				</Recipes>
			</PageLayout.Container>
		</PageLayout>
	);
};

export default CategoriesPage;
