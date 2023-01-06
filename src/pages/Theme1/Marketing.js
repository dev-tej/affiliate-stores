import React from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  CheckOutSection,
  MarketingContainer,
  ThemeBrandBannerLogo,
  CouponContainer,
} from "./components";
import BrandBanner from "../../assets/LandingPage/BrandBanner.svg";

const Marketing = () => {
  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  const handleCopyClick = (copyText) => {
    copyTextToClipboard(copyText)
      .then(() => {
        toast.success("Copied to Clipboard", {
          style: {
            border: "1px solid #11100d",
            padding: "16px",
            color: "#ffc323",
            background: "#11100d",
          },
          iconTheme: {
            primary: "#ffc323",
            secondary: "#11100d",
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MarketingContainer>
      <Toaster position="top-center" />
      <CheckOutSection>
        <h1>Check out Aashna Shroff's top pic for Myntra's Beauty Sale !</h1>
      </CheckOutSection>
      <ThemeBrandBannerLogo src={BrandBanner} alt="brandBanner" />
      <CouponContainer>
        <div>
          <h1>Get 20% off on your first order</h1>
          <p>Use code FIRST20 to get 10% off </p>
        </div>
        <i
          className="fa-regular fa-copy"
          style={{ fontSize: "22px" }}
          onClick={() => handleCopyClick("AZVY1234#")}
        ></i>
      </CouponContainer>
    </MarketingContainer>
  );
};

export default Marketing;
