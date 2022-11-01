import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Sheet from "react-modal-sheet";
import {
  ProductsDisplayContainer,
  ProductName,
  ProductImage,
  ProductDescription,
  ProductBuyNowButton,
  ProductPriceContainer,
  ProductDetailsHeaderSection,
  ProductDetailsProductName,
  ProductDetailsInfoSection,
  ProductDetailsImage,
  ProductDetailsPriceContainer,
  ProductDetailsImagesContainer,
  ProductDetailsSizeContainer,
  ProductDetailsSizeHeader,
  ProductDetailsBuyNowButton,
} from "./components";
import Product1 from "../../assets/NewLayout/Product1.svg";
import Product2 from "../../assets/NewLayout/Product2.svg";
import Product3 from "../../assets/NewLayout/Product3.svg";
import "./index.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Products = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <ProductsDisplayContainer>
        <ProductName>Checked Cotton Shirt</ProductName>
        <hr />
        <Carousel
          showDots
          responsive={responsive}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListclassName={"Landing_customDots"}
          autoPlay
          infinite
          // autoPlaySpeed={1000}
        >
          <div>
            <ProductImage src={Product1} />
          </div>
          <div>
            <ProductImage src={Product2} />
          </div>
          <div>
            <ProductImage src={Product3} />
          </div>
        </Carousel>
        <ProductPriceContainer>
          <h1>&#8377;120</h1>
          <h2>&#8377;120</h2>
        </ProductPriceContainer>
        <ProductDescription>
          100% Cotton. Available in plain or floral print. Straight design. Mao
          neckline. Long sleeve. Button fastening on the front section...
          <strong>Read more</strong>
        </ProductDescription>
        <ProductBuyNowButton onClick={() => setOpen(true)}>
          BUY NOW
        </ProductBuyNowButton>
      </ProductsDisplayContainer>
      <ProductsDisplayContainer>
        <ProductName>Checked Cotton Shirt</ProductName>
        <hr />
        <Carousel
          showDots
          responsive={responsive}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListclassName={"Landing_customDots"}
          autoPlay
          infinite
          // autoPlaySpeed={1000}
        >
          <div>
            <ProductImage src={Product1} />
          </div>
          <div>
            <ProductImage src={Product2} />
          </div>
          <div>
            <ProductImage src={Product3} />
          </div>
        </Carousel>
        <ProductPriceContainer>
          <h1>&#8377;120</h1>
          <h2>&#8377;120</h2>
        </ProductPriceContainer>
        <ProductDescription>
          100% Cotton. Available in plain or floral print. Straight design. Mao
          neckline. Long sleeve. Button fastening on the front section...
          <strong>Read more</strong>
        </ProductDescription>
        <ProductBuyNowButton onClick={() => setOpen(true)}>
          BUY NOW
        </ProductBuyNowButton>
      </ProductsDisplayContainer>
      <Sheet isOpen={open} onClose={() => setOpen(false)}>
        <Sheet.Container>
          <ProductDetailsHeaderSection>
            <div>
              <ProductDetailsProductName>
                Checked Cotton Shirt
              </ProductDetailsProductName>
            </div>
            <div onClick={() => setOpen(false)}>
              <i className="fas fa-times"></i>
            </div>
          </ProductDetailsHeaderSection>
          <hr
            style={{
              border: "1px solid #efefef",
              width: "100%",
              marginTop: "-10px",
            }}
          />
          <ProductDetailsInfoSection>
            <ProductDetailsImage src={Product1} />
            <ProductDetailsPriceContainer>
              <h1>&#8377;120</h1>
              <h2>&#8377;120</h2>
            </ProductDetailsPriceContainer>
            <ProductDetailsImagesContainer>
              <img src={Product1} alt="" />
              <img src={Product2} alt="" />
              <img src={Product3} alt="" />
            </ProductDetailsImagesContainer>
            <ProductDescription>
              100% Cotton. Available in plain or floral print. Straight design.
              Mao neckline. Long sleeve. Button fastening on the front
              section...
              <strong>Read more</strong>
            </ProductDescription>
            <div style={{ marginTop: "12px" }}>
              <ProductDetailsSizeHeader>Size</ProductDetailsSizeHeader>
              <ProductDetailsSizeContainer>
                <button>XS</button>
                <button>S</button>
                <button>M</button>
                <button>L</button>
              </ProductDetailsSizeContainer>
            </div>
            <div style={{ marginTop: "12px" }}>
              <ProductDetailsSizeHeader>Color</ProductDetailsSizeHeader>
              <ProductDetailsSizeContainer>
                <button>Blue</button>
                <button>White</button>
                <button>Red</button>
                <button>Green</button>
              </ProductDetailsSizeContainer>
            </div>
            <ProductDetailsBuyNowButton>BUY NOW</ProductDetailsBuyNowButton>
          </ProductDetailsInfoSection>
        </Sheet.Container>
      </Sheet>
    </div>
  );
};

export default Products;
