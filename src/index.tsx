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

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "recipes/*",
				children: [
					{ index: true, element: <div>recipes all</div> },
					{ path: "add", element: <div>recipes add</div> },
					{ path: ":id", element: <RecipePage /> },
				],
			},
		],
	},
	{
		path: "admin/*",
		element: <div>edit</div>,
		children: [
			{ index: true, element: <div>edit index</div> },
			{ path: ":id", element: <div>edit id</div> },
		],
	},
]);

root.render(
	<Redux.Provider store={store}>
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	</Redux.Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
