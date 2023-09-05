import React , { useContext }from "react";
import { BsBag } from "react-icons/bs";
import ProductsContext from "./../../contexts/productsContext";
import "./Navbar.css";

export default function Navbar() {
  const setisShowBagside = useContext(ProductsContext).setisShowBagside;
  const userCart = useContext(ProductsContext).userCart;
// console.log(userCart);
  return (
    <div>
      <nav className="navbar main navbar-expand-sm bg-primary ">
        <div className="container d-flex justify-content-center  ">
          <a className="navbar-brand link-light " href="#">
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
              <li className="nav-item">
                <a className="nav-link" href="#">
                  contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  about us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  new products
                </a>
              </li>
            </ul>
            <div className="bag-container">
              <a
                className="nav-link bag-container"
                href="#"
                onClick={() => {
                  setisShowBagside(true);
                }}
              >
                <BsBag className="bag" />
                <span className="bag-conter">{userCart.length}</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
