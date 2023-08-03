import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../App.css";

const Layout = () => {
  return (
    <div className="">
      <nav
        className="navbar navbar-expand-md navbar-dark bg-dark"
        aria-label="Eighth navbar example"
      >
        <div className="container">
          {/* <a className="navbar-brand" href="#">
            Container
          </a> */}
          <NavLink className="navbar-brand" to={"/"}>
            HOME
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample07"
            aria-controls="navbarsExample07"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample07">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " to={"/"}>
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link " to={"/records"}>
                  Records
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link " to={"/about"}>
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
