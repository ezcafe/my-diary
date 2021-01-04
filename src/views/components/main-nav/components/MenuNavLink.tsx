import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

const MenuNavLink: React.FC<NavLinkProps> = ({ children, to }: React.PropsWithChildren<NavLinkProps>) => {
	return (
		<NavLink exact to={to} activeClassName="active">
			{children}
		</NavLink>
	);
};

export default MenuNavLink;
