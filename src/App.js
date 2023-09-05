import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Card from "./Components/Card/Card";
import Toast from "./Components/Toast/Toast";
import BagsideBar from "./Components/BagsideBar/BagsideBar";
import ProductsContext from "./contexts/productsContext";
import { AllProducts } from "./data";
import "./Components/Compnents.css";

export default function App() {
  const [Products, setProducts] = useState(AllProducts);
  const [userCart, setuserCart] = useState([

  ]);
  const [isShowToast, setisShowToast] = useState(false);
  const [isShowBagside, setisShowBagside] = useState(false);
  return (
    <div>
      <ProductsContext.Provider
        value={{
          Products,
          isShowToast,
          setisShowToast,
          isShowBagside,
          setisShowBagside,
          userCart,
          setuserCart,
        }}
      >
        <Navbar />
        <BagsideBar />
        <h1 className="text-center mt-5">All products</h1>
        <div className="row d-flex justify-content-center m-5   ">
          <Card />
          <Toast />
        </div>
      </ProductsContext.Provider>
    </div>
  );
}
