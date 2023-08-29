import React from "react";
import { BsBag } from "react-icons/bs";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar main navbar-expand-sm ">
        <div className="container d-flex justify-content-center  ">
          <a className="navbar-brand" href="#">
            React Shop
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div
            className="collapse navbar-collapse  "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav m-auto mb-2 mb-lg-0   ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
            <div className="bag-container">
              <a className="nav-link bag-container" href="#">
                <BsBag className="bag" />
                <span className="bag-conter">0</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
