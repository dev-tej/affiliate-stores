import React from "react";
import {
  CheckOutSection,
  MarketingContainer,
  ThemeBrandBannerLogo,
  CouponContainer,
} from "./components";
import BrandBanner from "../../assets/LandingPage/BrandBanner.svg";

const Marketing = () => {
  return (
    <MarketingContainer>
      <CheckOutSection>
        <h1>Check out Aashna Shroff's top pic for Myntra's Beauty Sale !</h1>
      </CheckOutSection>
      <ThemeBrandBannerLogo src={BrandBanner} alt="brandBanner" />
      <CouponContainer>
        <div>
          <h1>Get 20% off on your first order</h1>
          <p>Use code FIRST20 to get 10% off </p>
        </div>
        <i className="fa-regular fa-copy" style={{ fontSize: "22px" }}></i>
      </CouponContainer>
    </MarketingContainer>
  );
};

export default Marketing;
