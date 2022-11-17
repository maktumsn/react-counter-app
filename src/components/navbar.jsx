import React, { Component } from "react";
//stateless functional components instead of classee when there are no states involved.
const Navbar = ({ totalCount }) => {
  console.log("Navbar-Rendered");
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-primary">{totalCount}</span>
      </a>
    </nav>
  );
};

export default Navbar;
