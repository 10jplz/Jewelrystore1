import React from "react";
import AuthNav from "../auth-nav";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <a className="navbar-brand" href="/items">
        Admin Inventory Control
      </a>
      <a className="navbar-brand" href="/addItem">
        Add New Items
      </a>
      <AuthNav />
    </nav>
  );
}

export default Nav;
