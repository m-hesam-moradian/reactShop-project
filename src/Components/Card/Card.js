import React, { useContext } from "react";
import ProductsContext from "./../../contexts/productsContext";
import "./Card.css";

export default function Card() {
  const setisShowToast = useContext(ProductsContext).setisShowToast;
  const Products = useContext(ProductsContext).Products;
  const setuserCart = useContext(ProductsContext).setuserCart;
  const userCart = useContext(ProductsContext).userCart;
  return (
    <>
      {Products.map((category, index) => (
        <div
          key={index}
          className="row min-  m-3 d-flex justify-content-center "
        >
          <h2 className="text-center">{category.category}</h2>
          {category.productsInfo.map((product, index) => (
            <div key={index} className="card card-container col m-3   p-4 mt-5">
              <div className=" d-flex justify-content-center ">
                <img src={product.img} className="card-img-top " alt="..." />
              </div>
              <div className="card-body text-center ">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">price: ${product.price}</p>
                <a
                  className="btn btn-danger m-2 "
                  onClick={() => {
                    setisShowToast(true);
                    const isThereSameProduct = userCart.some(
                      (userProduct) => userProduct.name == product.name
                    );
                    // console.log(isThereSameProduct);
                    if (!isThereSameProduct) {
                      setuserCart((prev) => [
                        ...prev,
                        {
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          count: 1,
                          img: product.img,
                        },
                      ]);
                      setTimeout(() => {
                        setisShowToast(false);
                      }, 2000);
                      // const theMultiCountProduct = userCart.map(
                      //   (userProduct) => {
                      //     if (userProduct.name == product.name) {
                      //     userProduct.count=+1
                      //   }  }
                      // );
                      // theMultiCountProduct[0].name
                    } else {
                      let userCartCountEdited = userCart.map((userProduct) => {
                        if (userProduct.name == product.name) {
                          userProduct.count++;
                        }
                        return userProduct;
                      });
                      setuserCart(userCartCountEdited);
                      console.log(userCart);
                    }
                  }}
                >
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
      ))}
    </>
  );
}
