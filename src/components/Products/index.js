import React from "react";
import {
  ProductsDisplayContainer,
  ProductSection,
  ProductDiscountPercentage,
  ProductImage,
  ProductName,
  ProductPrice,
} from "./Products.components";

const Products = (props) => {
  const { products } = props;
  return (
    <ProductsDisplayContainer>
      {products?.map((product, index) => {
        return (
          <ProductSection key={index} onClick={() => window.open(product?.url)}>
            <div>
              <ProductImage src={product?.image} />
            </div>
            <div>
              <ProductName>{product?.title?.substring(0, 15)}...</ProductName>
              <ProductPrice>&#8377;&nbsp;{product?.price}</ProductPrice>
              <ProductDiscountPercentage>
                {product?.discount || "67% OFF"}
              </ProductDiscountPercentage>
            </div>
          </ProductSection>
        );
      })}
    </ProductsDisplayContainer>
  );
};

export default Products;
