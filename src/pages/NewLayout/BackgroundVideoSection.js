import React, { useState, useRef } from "react";
import {
  VideoContainer,
  BackgroundVideo,
  TapMoreContainer,
  TapMoreText,
  ProductInfoContainer,
  BannerContainer,
  BrandPerson,
  TopTicksText,
  SideBarContainer,
  BrandButton,
  BrandImage,
  ShowBarContainer,
  BrandInfoContainer,
  BrandTitle,
  BrandDescription,
  BrandDetailContainer,
  CouponFlyoutButton,
  CouponFlyoutContainer,
  CouponFlyoutInfoContainer,
  ShareUrlButton,
  ShareUrlContainer,
  ShareUrlInfoContainer,
  CopyUrlButton,
  CopyUrlButtonSelected,
} from "./components";
import { motion } from "framer-motion";
import Info from "./Info";
import BrandLogo from "../../assets/NewLayout/MangoLogo.svg";

const BackgroundVideoSection = () => {
  const [showBrandBar, setShowBrandBar] = useState(false);
  const [showCouponFlyout, setShowCouponFlyout] = useState(false);
  const [showShareUrl, setShowShareUrl] = useState(false);
  const [buttonSelected, setButtonSelected] = useState(false);

  const myRef = useRef(null);
  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  return (
    <div>
      <VideoContainer>
        <BackgroundVideo autoPlay muted loop>
          <source
            src="https://gallerify.s3.us-west-2.amazonaws.com/insta/reel/MangoMuse.mp4"
            type="video/mp4"
          />
          Your browser does not support HTML5 video.
        </BackgroundVideo>
        <BannerContainer>
          <BrandPerson>Kiara's</BrandPerson>
          <TopTicksText>TOP PICKS</TopTicksText>
        </BannerContainer>
        <SideBarContainer>
          {showBrandBar ? (
            <ShowBarContainer>
              <BrandInfoContainer>
                <div>
                  <BrandImage src={BrandLogo} />
                </div>
                <BrandDetailContainer>
                  <BrandTitle>Autumn Winter Collection</BrandTitle>
                  <BrandDescription>
                    Bold and structured silhouettes, tailored goodness, and
                    creative knits for the artistic explorer spirit in you.
                    Explore the new Autumn/ Winter collection and get creative
                    with your transitional weather fits!
                  </BrandDescription>
                </BrandDetailContainer>
              </BrandInfoContainer>
              <div>
                <i
                  class="fas fa-angle-right"
                  style={{ color: "#000", marginRight: "10px" }}
                  onClick={() => setShowBrandBar(false)}
                ></i>
              </div>
            </ShowBarContainer>
          ) : (
            <BrandButton onClick={() => setShowBrandBar(true)}>
              <BrandImage src={BrandLogo} />
            </BrandButton>
          )}
          {showCouponFlyout ? (
            <CouponFlyoutContainer>
              <CouponFlyoutInfoContainer>
                <div>
                  <i
                    class="fas fa-percentage"
                    style={{ color: "#000", fontSize: "20px" }}
                  ></i>
                </div>
                <div>
                  <BrandDescription>
                    Use code <strong>50OFF</strong> at check out get Flat 50%
                    off!
                  </BrandDescription>
                </div>
              </CouponFlyoutInfoContainer>
              <div>
                <i
                  class="fas fa-angle-right"
                  style={{
                    color: "#000",
                    marginRight: "10px",
                    fontSize: "20px",
                  }}
                  onClick={() => setShowCouponFlyout(false)}
                ></i>
              </div>
            </CouponFlyoutContainer>
          ) : (
            <CouponFlyoutButton onClick={() => setShowCouponFlyout(true)}>
              <i
                class="fas fa-percentage"
                style={{ color: "#000", fontSize: "20px" }}
              ></i>
            </CouponFlyoutButton>
          )}
          {showShareUrl ? (
            <ShareUrlContainer>
              <ShareUrlInfoContainer>
                <div>
                  <i
                    class="fas fa-share-alt"
                    style={{ color: "#000", fontSize: "20px" }}
                  ></i>
                </div>
                <div>
                  <BrandDescription>Share store with others</BrandDescription>
                </div>
              </ShareUrlInfoContainer>
              {/* <div>
                <CopyUrlButton>Copy Url</CopyUrlButton>
              </div> */}
              <div>
                {buttonSelected ? (
                  <CopyUrlButtonSelected
                    onClick={() => setButtonSelected(false)}
                  >
                    Copy Url
                  </CopyUrlButtonSelected>
                ) : (
                  <CopyUrlButton onClick={() => setButtonSelected(true)}>
                    Copy Url
                  </CopyUrlButton>
                )}
              </div>
              <div>
                <i
                  class="fas fa-angle-right"
                  style={{
                    color: "#000",
                    marginRight: "10px",
                    fontSize: "20px",
                  }}
                  onClick={() => setShowShareUrl(false)}
                ></i>
              </div>
            </ShareUrlContainer>
          ) : (
            <ShareUrlButton onClick={() => setShowShareUrl(true)}>
              <i
                class="fas fa-share-alt"
                style={{ color: "#000", fontSize: "20px" }}
              ></i>
            </ShareUrlButton>
          )}
        </SideBarContainer>
        <TapMoreContainer onClick={executeScroll}>
          <motion.div
            animate={{
              x: 0,
              y: 10,
              scale: 1,
            }}
            transition={{ ease: "linear", duration: 0.5, repeat: Infinity }}
          >
            <TapMoreText>Tap to shop</TapMoreText>
            <i
              class="fas fa-angle-double-down"
              style={{ color: "#fff", marginLeft: "25px", cursor: "pointer" }}
            ></i>
          </motion.div>
        </TapMoreContainer>
      </VideoContainer>
      <ProductInfoContainer ref={myRef}>
        <Info />
      </ProductInfoContainer>
    </div>
  );
};

export default BackgroundVideoSection;
