import React from "react";
import ProductCard1 from "./ProductCard1";
import ProductCard2 from "./ProductCard2";
import ProductCard3 from "./ProductCard3";
import ProductCard4 from "./ProductCard4";
import ProductCard5 from "./ProductCard5";

function ProductSection() {
  return (
    <div id="smart-products">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 md:px-8 px-4">
        <ProductCard1 />
        <ProductCard2 />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 md:px-8 px-4">
        <ProductCard3 />
        <ProductCard4 />
        <ProductCard5 />
      </div>
    </div>
  );
}

export default ProductSection;
