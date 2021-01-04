import React from "react";
import MenuNavLink from "./components/MenuNavLink";
import RouteEnum from "../../../constants/RouteEnum";

const MainNav: React.FC = () => {
	return (
		<section>
			<nav>
				<MenuNavLink to={RouteEnum.Home}>Home</MenuNavLink>
				<MenuNavLink to={RouteEnum.Items}>Items</MenuNavLink>
				<MenuNavLink to={RouteEnum.About}>About</MenuNavLink>
			</nav>
		</section>
	);
};

export default MainNav;
