import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Cards from "./Components/Card/Card";
 
import { AllProducts } from "./data";
export default function App() {
  console.log(AllProducts);
  return (
    <div>
      <Navbar />
      <h1 className="text-center mt-5">All products</h1>
      <div className="row d-flex justify-content-center m-5   ">
        {AllProducts.map((category) => (
          <Cards category={category} />
        ))}
      </div>
      <div class="row"></div>
    </div>
  );
}
