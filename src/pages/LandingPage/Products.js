import React from "react";
import {
  ProductsContainer,
  ProductDisplay,
  ProductMainImage,
  MiniProductsContainer,
  ProductDetailsContainer,
  ProductDiscountPrice,
  ProductName,
  ProductPriceContainer,
  ProductPrice,
  BuyProductButton,
} from "./components";

const Products = () => {
  return (
    <ProductsContainer>
      <h1>Products</h1>
      <ProductDisplay>
        <ProductMainImage
          src="https://cdn.shopify.com/s/files/1/0398/7780/4188/products/27051119_70_600x.jpg?v=1646550255"
          alt="productImage"
        />
        <MiniProductsContainer>
          <img
            src="https://cdn.shopify.com/s/files/1/0398/7780/4188/products/37010259_99-99999999_01_600x.jpg?v=1665000885"
            alt="productImage"
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0398/7780/4188/products/17024049_76_1400x.jpg?v=1665127056"
            alt="productImage"
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0398/7780/4188/products/27051119_70_600x.jpg?v=1646550255"
            alt="productImage"
          />
        </MiniProductsContainer>
      </ProductDisplay>
      <ProductDetailsContainer>
        <ProductName>100% Cotton Sweatshirt</ProductName>
        <ProductPriceContainer>
            <ProductDiscountPrice>&#x20B9;900</ProductDiscountPrice>
            <ProductPrice>&#x20B9;650</ProductPrice>
        </ProductPriceContainer>
      </ProductDetailsContainer>
      <BuyProductButton>
            <p>Buy Now</p>
        </BuyProductButton>
    </ProductsContainer>
  );
};

export default Products;
