import React, { Suspense, lazy } from "react";
import { History } from "history";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import { Dispatch } from "redux";
import IAction from "../models/IAction";
import RouteEnum from "../constants/RouteEnum";
import MainNav from "./components/main-nav/MainNav";
import LoadingIndicator from "./components/loading-indicator/LoadingIndicator";
import Toasts from "./components/toasts/Toasts";

const HomePage = lazy(() => import("./home-page/HomePage"));
const NotFoundPage = lazy(() => import("./not-found-page/NotFoundPage"));
const ItemsPage = lazy(() => import("./items-page/ItemsPage"));
const AboutPage = lazy(() => import("./about-page/AboutPage"));

interface IProps {
	readonly history: History;
	readonly dispatch: Dispatch<IAction<any>>;
}

const App: React.FC<IProps> = ({ history }: React.PropsWithChildren<IProps>) => {
	return (
		<ConnectedRouter history={history}>
			<Suspense fallback={<LoadingIndicator isActive />}>
				<MainNav />
				<Switch>
					<Route exact path={RouteEnum.Home} component={HomePage} />
					<Route path={RouteEnum.Items} component={ItemsPage} />
					<Route path={RouteEnum.About} component={AboutPage} />
					<Route component={NotFoundPage} />
				</Switch>
				<Toasts />
			</Suspense>
		</ConnectedRouter>
	);
};

export default App;
