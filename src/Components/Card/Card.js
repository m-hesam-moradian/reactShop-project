import React from "react";
import "./Card.css";

export default function Card({ category }) {
  console.log(category);
  return (
    <>
      <div class="row  m-3 d-flex justify-content-center ">
        <h2 className="text-center">{category.category}</h2>
        {category.productsInfo.map((product) => (
          <div key={category.id} class="card card-container col m-3   p-4 mt-5">
            <div className=" d-flex justify-content-center ">
              <img src={product.img} class="card-img-top " alt="..." />
            </div>
            <div class="card-body text-center ">
              <h5 class="card-title">{product.name}</h5>
              <p class="card-text">price: ${product.price}</p>
              <a href="#" class="btn btn-danger m-2 ">
                Go somewhere
              </a>
              <a href="#" class="btn btn-outline-dark m-2 ">
                Go somewhere
              </a>
              <p className="number">number: {product.count}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
