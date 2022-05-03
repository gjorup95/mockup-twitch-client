import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore, compose } from "@reduxjs/toolkit";
import App from "./components/App";
import reducers from "./reducers";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({
	middleware: [thunk],
	reducer: reducers,
	composeEnhancers: composeEnhancers,
});

export default store;
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
	<Provider store={store}>
		<App tab="home" />
	</Provider>
);
