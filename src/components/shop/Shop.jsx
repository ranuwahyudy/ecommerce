import React from "react";
import ShopCart from "./ShopCart";
import "./style.css";

const Shop = ({ shopItems, addToCart }) => {
  return (
    <>
      <section className="shop background">
        <div className="container d_flex">
          <div className="shop-content">
            <div className="heading d_flex">
              <div className="heading-left row f_flex">
                <img
                  src="https://img.icons8.com/glyph-neue/64/26e07f/new.png"
                  alt=""
                />
                <h2>New Arrivals</h2>
              </div>
              <div className="heading-right row">
                <span>View All</span>
                <i className="fa fa-caret-right"></i>
              </div>
            </div>

            <div className="product-content grid2">
              <ShopCart shopItems={shopItems} addToCart={addToCart} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
