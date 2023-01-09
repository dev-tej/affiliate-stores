import React, { useContext } from "react";
import { UserStoreData } from "./index";
import toast, { Toaster } from "react-hot-toast";
import {
  CheckOutSection,
  MarketingContainer,
  ThemeBrandBannerLogo,
  CouponContainer,
} from "./components";
import BrandBanner from "../../assets/LandingPage/BrandBanner.svg";

const Marketing = () => {
  const data = useContext(UserStoreData);

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
        <h1>{data?.profileSection?.storeDescription}</h1>
      </CheckOutSection>
      <ThemeBrandBannerLogo src={BrandBanner} alt="brandBanner" />
      {data?.couponSection?.map((coupon, index) => {
        return (
          <CouponContainer key={index}>
            <div>
              <h1>{coupon?.title}</h1>
              <p>{coupon?.description}</p>
            </div>
            <i
              className="fa-regular fa-copy"
              style={{ fontSize: "22px" }}
              onClick={() => handleCopyClick(coupon?.code)}
            ></i>
          </CouponContainer>
        );
      })}
    </MarketingContainer>
  );
};

export default Marketing;
