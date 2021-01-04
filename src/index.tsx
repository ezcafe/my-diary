import React from "react";
import ReactDOM from "react-dom";
import { Store } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import { createBrowserHistory, History } from "history";
import IStore from "./models/IStore";
import reportWebVitals from "./reportWebVitals";
import rootStore from "./stores/rootStore";
import App from "./views/App";

import "./index.module.scss";

(async (window: Window): Promise<void> => {
	const initialState: Partial<IStore> = {};
	const history: History = createBrowserHistory();
	const store: Store<IStore> = rootStore(initialState, history);

	const rootEl: HTMLElement | null = document.getElementById("root");
	const render = (Component: typeof App, el: HTMLElement | null): void => {
		ReactDOM.render(
			<React.StrictMode>
				<ReduxProvider store={store}>
					<Component history={history} dispatch={store.dispatch} />
				</ReduxProvider>
			</React.StrictMode>,
			el
		);
	};

	render(App, rootEl);

	// If you want to start measuring performance in your app, pass a function
	// to log results (for example: reportWebVitals(console.log))
	// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
	reportWebVitals();
})(window);
