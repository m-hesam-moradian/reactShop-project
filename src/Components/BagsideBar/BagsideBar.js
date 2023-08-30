import React from "react";
import { BsBag } from "react-icons/bs";

export default function BagsideBar() {
  return (
    <div className="BagsideBar">
      <div className="BagsideBar-container active">
        {/* active */}
        <div className=" bag-row ">
          <div className="d-flex text-primary ">
            <BsBag className="bag-icon"></BsBag>
            <h2>cart</h2>
            <a href="#" className="btn-close ms-auto "></a>
          </div>

          <hr />

          <div className="BagsideBar   d-flex ">
            <img
              src="/images/phone-screen-with-abstract-marble-aesthetic_53876-145553.avif"
              alt=""
              width={10}
              height={25}
            />
            <div className="bag-text">
              <h4>iphone 13</h4>
              <p>$9876</p>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary ">
          Checkout
        </button>
        <br />
      </div>
    </div>
  );
}
