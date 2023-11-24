import React from "react";
import style from "./Search.module.css";

const Search = () => {
	return (
		<input
			type="search"
			name="search-field"
			id="search"
			className={style["_"]}
			placeholder="Поиск"
		/>
	);
};

export default Search;
