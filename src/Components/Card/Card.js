import React from "react";
import "./Card.css";

export default function Card({ category }) {
  console.log(category);
  return (
    <>
      <div className="row min-  m-3 d-flex justify-content-center ">
        <h2 className="text-center">{category.category}</h2>
        {category.productsInfo.map((product, index) => (
          <div key={index} className="card card-container col m-3   p-4 mt-5">
            <div className=" d-flex justify-content-center ">
              <img src={product.img} className="card-img-top " alt="..." />
            </div>
            <div className="card-body text-center ">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">price: ${product.price}</p>
              <a href="#" className="btn btn-danger m-2 ">
                add to cart
              </a>
              <a href="#" className="btn btn-outline-dark m-2 ">
                more information
              </a>
              <p className="number">number: {product.count}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
