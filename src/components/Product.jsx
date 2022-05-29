import React from "react";
import Book from "./Book";
import Mixer from "./Mixer";
import Watch from "./Watch";
import Alexa from "./Alexa";
import Ipad from "./Ipad";
import Monitor from "./Monitor";

function Product() {
  return (
    <div class="product">
      <div class="product_row d-flex">
        <Book />
        <Mixer />
        <Watch />
      </div>
      <div class="product_row d-flex">
        <Alexa />
        <Ipad />
      </div>
      <div class="product_row d-flex">
        <Monitor />
      </div>
    </div>
  );
}

export default Product;
