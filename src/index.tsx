import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import * as Redux from "react-redux";
import store from "./store";
import RecipePage from "./pages/RecipePage/RecipePage";
import CategoriesPage from "./pages/CategoriesPage";
import CuisinesPage from "./pages/CuisinesPage";
import RecipeEditPage from "./pages/RecipePage/RecipeEditPage";
import SearchPage from "./pages/SearchPage";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "recipes/*",
				children: [
					{ index: true, element: <CategoriesPage /> },
					{ path: "add", element: <RecipeEditPage add /> },
					{ path: ":id", element: <RecipePage /> },
					{ path: ":id/edit", element: <RecipeEditPage /> },
				],
			},
			{
				path: "cuisine/*",
				children: [
					{ index: true, element: <CuisinesPage /> },
					{
						path: ":id",
						element: <CategoriesPage specific />,
					},
				],
			},
			{ path: "search/:query", element: <SearchPage /> },
		],
	},
	{
		path: "admin/*",
		children: [
			{ index: true, element: <div>edit index</div> },
			{ path: ":id", element: <div>edit id</div> },
		],
	},
]);

root.render(
	// <React.StrictMode>
	<Redux.Provider store={store}>
		<RouterProvider router={router} />
	</Redux.Provider>,
	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
