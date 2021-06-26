import { NavLink } from "react-router-dom";
import React from "react";

const MainNav = () => (
  <div className="navbar-nav mr-auto">
    <NavLink
      to="/"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Admin Inventory Control
    </NavLink>
    <NavLink
      to="/addItem"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Add New Items
    </NavLink>
  </div>
);

export default MainNav;
