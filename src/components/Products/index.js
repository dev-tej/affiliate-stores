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
              <ProductImage src={product?.thumbnail} />
            </div>
            <div>
              <ProductName>{product?.tilte}</ProductName>
              <ProductPrice>{product?.price}</ProductPrice>
              <ProductDiscountPercentage>
                {product?.discount}
              </ProductDiscountPercentage>
            </div>
          </ProductSection>
        );
      })}
    </ProductsDisplayContainer>
  );
};

export default Products;
