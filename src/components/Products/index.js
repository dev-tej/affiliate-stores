import React, { useState } from "react";
import {
  ProductsDisplayContainer,
  ProductSection,
  ProductDiscountPercentage,
  ProductImage,
  ProductName,
  ProductPrice,
} from "./Products.components";
import { client } from "services/ShopifyClient";
import BuyNow from "pages/Demo/BuyNow";
// import Sheet from "react-modal-sheet";

const Products = (props) => {
  const { products } = props;
  const [selectedProduct, setSelectedProduct] = useState({});
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [variants, setVariants] = useState([]);

  const handleSheetClose = () => {
    setBottomSheetOpen(false);
  };

  const getVariants = (prodId) => {
    const productId = `gid://shopify/Product/${prodId}`;
    client.product.fetch(productId).then((product) => {
      setVariants(product?.variants);
    });
  };

  return (
    <>
      <ProductsDisplayContainer>
        {products?.map((product, index) => {
          return (
            <ProductSection
              key={index}
              onClick={() => {
                setSelectedProduct(product);
                setBottomSheetOpen(!bottomSheetOpen);
                getVariants(product?.id);
              }}
            >
              <div>
                <ProductImage src={product?.image} />
              </div>
              <div>
                <ProductName>{product?.title?.substring(0, 15)}...</ProductName>
                <ProductPrice>&#8377;&nbsp;{product?.price}</ProductPrice>
                <ProductDiscountPercentage>
                  {product?.discount}
                </ProductDiscountPercentage>
              </div>
            </ProductSection>
          );
        })}
      </ProductsDisplayContainer>
      <BuyNow
        selectedProduct={selectedProduct}
        variants={variants}
        open={bottomSheetOpen}
        onClose={handleSheetClose}
      />
    </>
  );
};

export default Products;
