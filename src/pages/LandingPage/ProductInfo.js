import React from "react";
import { ProductInfoContainer, BrandBannerLogo } from "./components";
import HeaderInfo from "./HeaderInfo";
import Categories from "./Categories";
import BrandBanner from "../../assets/LandingPage/BrandBanner.svg";

const ProductInfo = () => {
  return (
    <ProductInfoContainer>
      <HeaderInfo />
      <BrandBannerLogo src={BrandBanner} alt="brandBanner" />
      <Categories />
    </ProductInfoContainer>
  );
};

export default ProductInfo;
