import React from "react";
import PageLayout from "../Components/common/PageLayout";
import { Recipes } from "../Components/modules/Recipes";
import { useParams } from "react-router-dom";
import { searchDish } from "../utils/fetches";
import { DishOutput } from "../types";

const SearchPage = () => {
	const { query } = useParams();
	const [searchResults, setSearchResults] = React.useState<DishOutput[]>([]);
	console.log(query);

	React.useEffect(() => {
		if (query) {
			searchDish(query).then((res) => setSearchResults(res || []));
		}
	}, [query]);

	return (
		<div className="SearchPage">
			<PageLayout.Title>Результаты поиска</PageLayout.Title>
			<PageLayout.Container>
				<Recipes>
					<Recipes.Section title={`Ваш запрос: ${query}`}>
						{searchResults.length ? (
							searchResults.map((dish, i) => <Recipes.Card key={i} dish={dish} />)
						) : (
							<p>Ничего не найдено</p>
						)}
					</Recipes.Section>
				</Recipes>
			</PageLayout.Container>
		</div>
	);
};

export default SearchPage;
