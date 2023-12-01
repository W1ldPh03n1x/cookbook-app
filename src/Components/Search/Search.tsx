import React, { KeyboardEvent } from "react";
import style from "./Search.module.css";
import { useNavigate } from "react-router-dom";

const Search = () => {
	const [query, setQuery] = React.useState("");
	const navigate = useNavigate();

	const handleSubmit = (query: string) => {
		console.log("Submit");
		navigate(`/search/${query}`);
		setQuery("");
	};

	const handleEnter = (e: KeyboardEvent) => {
		if (e.key === "Enter") {
			handleSubmit(query);
		}
	};

	return (
		<input
			type="text"
			name="search-field"
			id="search"
			className={style["_"]}
			placeholder="Поиск"
			value={query}
			onChange={(e) => setQuery(e.target.value)}
			onKeyDown={handleEnter}
		/>
	);
	{
		/* <button
			onClick={(e) => {
				handleSubmit(e.target);
			}}
		>
			Искать
		</button> */
	}
};

export default Search;
