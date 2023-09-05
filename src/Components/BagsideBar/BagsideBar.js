import React, { useContext } from "react";
import ProductsContext from "./../../contexts/productsContext";
import { BsBag } from "react-icons/bs";

export default function BagsideBar() {
  const isShowBagside = useContext(ProductsContext).isShowBagside;
  const setisShowBagside = useContext(ProductsContext).setisShowBagside;
  const userCart = useContext(ProductsContext).userCart;
  const setuserCart = useContext(ProductsContext).setuserCart;

  return (
    <div>
      <div className="BagsideBar">
        <div
          className={`BagsideBar-container ${isShowBagside ? "active" : ""}`}
        >
          {/* active */}
          <div className=" bag-row ">
            <div className="d-flex text-primary ">
              <BsBag className="bag-icon"></BsBag>
              <h2>cart</h2>
              <a
                href="#"
                className="btn-close ms-auto "
                onClick={() => {
                  setisShowBagside(false);
                }}
              ></a>
            </div>

            <hr />

            {userCart.map((product) => (
              <div className="BagsideBar   d-flex ">
                <img src={product.img} alt="" width={10} height={25} />
                <div className="bag-text">
                  <h4>{product.name}</h4>
                  <div className="d-flex    ">
                    <p className="me-5">${product.price}</p>
                    <p>count: {product.count}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button type="submit" className="btn btn-primary ">
            Checkout
          </button>
          <br />
        </div>
      </div>
      {/* <div className="background-bag" onClick={}></div> */}
    </div>
  );
}
