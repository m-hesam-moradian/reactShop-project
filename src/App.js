import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Cards from "./Components/Card/Card";
import Toast from "./Components/Toast/Toast";
import BagsideBar from "./Components/BagsideBar/BagsideBar";
import "./Components/Compnents.css";

import { AllProducts } from "./data";
export default function App() {
  console.log(AllProducts);
  return (
    <div>
      <Navbar />
      <BagsideBar/>
      <h1 className="text-center mt-5">All products</h1>
      <div className="row d-flex justify-content-center m-5   ">
        {AllProducts.map((category, index) => (
          <Cards key={index} category={category} />
        ))}
        <Toast/>
      </div>
     
    </div>
  );
}
