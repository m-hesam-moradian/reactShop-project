import React,{ useContext } from "react";
import ProductsContext from "./../../contexts/productsContext";

export default function Toast() {
  const isShowToast = useContext(ProductsContext).isShowToast;
  const setisShowToast = useContext(ProductsContext).setisShowToast;
  return (
    <div
      className={`toast   align-items-center text-white bg-success - border-0 ${
        isShowToast ? "show" : ""
      } `}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="d-flex">
        <div className="toast-body">the product added to cart</div>
        <button
          type="button"
          className="btn-close btn-close-white me-2 m-auto"
          data-bs-dismiss="toast"
          aria-label="Close"
          onClick={
            () => {
              setisShowToast(false)
              
            }
          }
        ></button>
      </div>
    </div>
  );
}
