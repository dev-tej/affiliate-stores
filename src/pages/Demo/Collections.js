import React, { useState } from "react";
import BuyNow from "./BuyNow";
import { client } from "services/ShopifyClient";
import { CollectionProductsDisplaySection } from "./Demo.components";

const Collections = (props) => {
  const { data } = props;
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
      {data?.map((collection, index) => {
        return (
          <div key={index}>
            <h1 className="collectionTitle">{collection?.title}</h1>
            <div className="collectionsProductContainer">
              {collection?.meta?.map((product, index) => {
                return (
                  <CollectionProductsDisplaySection
                    key={index}
                    thumbnail={product?.thumbnail || product?.image}
                  >
                    <div className="collectionProductsDisplay">
                      <h1 className="productTitle">{product?.title}</h1>
                      <div className="productPriceContainer">
                        <h1 className="productPrice">
                          &#8377; {product?.price}
                        </h1>
                        <button
                          className="productBuyNow"
                          onClick={() => {
                            setSelectedProduct(product);
                            setBottomSheetOpen(!bottomSheetOpen);
                            getVariants(product?.id);
                          }}
                        >
                          <p>Buy Now</p>
                        </button>
                      </div>
                    </div>
                  </CollectionProductsDisplaySection>
                );
              })}
            </div>
          </div>
        );
      })}
      <BuyNow
        selectedProduct={selectedProduct}
        open={bottomSheetOpen}
        onClose={handleSheetClose}
        variants={variants}
      />
    </>
  );
};

export default Collections;
