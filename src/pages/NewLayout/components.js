import styled, { keyframes } from "styled-components";

const FadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const Hue = keyframes`
  from {
    -webkit-filter: hue-rotate(0deg);
  }
  to {
    -webkit-filter: hue-rotate(360deg);
  }
`;

const MoveInRight = keyframes`
  0% {
    opacity: 1;
    transform: translateX(100px);
  }
  80% {
    transform: translateX(-10px);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
`;

export const VideoContainer = styled.div`
  width: 100% !important;
  height: 100vh;
  display: flex;
  justify-content: center !important;
  align-items: center !important;
  background: rgba(10, 10, 10, 0.6) !important;
`;

export const BackgroundVideo = styled.video`
  position: fixed;
  width: 100% !important;
  height: 100vh;
  object-fit: cover !important;
  z-index: -1;
`;

export const BannerContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 450px;
  margin-top: 175px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BrandPerson = styled.h1`
  color: #fff;
  text-shadow: 3px 3px #000;
  font-size: 16px;
  letter-spacing: 0.25em;
  animation: ${FadeIn} 1s;
`;

export const TopTicksText = styled.h1`
  width: 250px;
  margin-top: 10px;
  text-align: center !important;
  font-size: 70px;
  color: #fff;
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  animate: ${Hue} 1.5s infinite linear;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${Hue} 1.5s infinite linear;
  letter-spacing: 0.1em;
  @media (max-width: 450px) {
    font-size: 50px;
  }
`;

export const SideBarContainer = styled.div`
  margin-top: 300px;
  position: fixed;
  right: 0 !important;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  row-gap: 20px;
  align-items: flex-end;
`;

export const BrandButton = styled.button`
  width: 40px;
  height: 120px;
  padding: 10px;
  background: #ffffff;
  border: 1px solid #000000;
  box-shadow: 4px 4px 0px #000000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BrandImage = styled.img`
  width: 100% !important;
  height: 100% !important;
`;

export const ShowBarContainer = styled.div`
  width: 90%;
  max-width: 400px;
  height: 150px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 20px;
  background: #ffffff;
  border: 1px solid #000000;
  box-shadow: 4px 4px 0px #000000;
  animation-name: ${MoveInRight};
  animation-duration: 1s;
`;

export const BrandInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
`;

export const BrandDetailContainer = styled.div`
  width: 80% !important;
`;

export const BrandTitle = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
`;

export const BrandDescription = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
`;

export const CouponFlyoutButton = styled.button`
  width: 40px;
  height: 52px;
  padding: 10px;
  background: #ffffff;
  border: 1px solid #000000;
  box-shadow: 4px 4px 0px #000000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CouponFlyoutContainer = styled.div`
  width: 90%;
  max-width: 400px;
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 20px;
  background: #ffffff;
  border: 1px solid #000000;
  box-shadow: 4px 4px 0px #000000;
  animation-name: ${MoveInRight};
  animation-duration: 1s;
`;

export const CouponFlyoutInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
  margin-left: 10px;
`;

export const ShareUrlButton = styled.div`
  width: 40px;
  height: 52px;
  background: #ffffff;
  border: 1px solid #000000;
  box-shadow: 4px 4px 0px #000000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ShareUrlContainer = styled.div`
  width: 90%;
  max-width: 400px;
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 20px;
  background: #ffffff;
  border: 1px solid #000000;
  box-shadow: 4px 4px 0px #000000;
  animation-name: ${MoveInRight};
  animation-duration: 1s;
`;

export const ShareUrlInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
  margin-left: 10px;
`;

export const CopyUrlButton = styled.button`
  width: auto;
  height: 28px;
  margin-bottom: 10px;
  background: #ffffff;
  border: 1px solid #000000;
  box-shadow: 0px 4px 0px #000000;
  text-align: center;
  cursor: pointer;
  outline: none;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #000000;
  &:focus {
    transform: translateY(4px) !important;
    box-shadow: 0px 4px 0px #000000;
    background: #ff0000;
    color: #fff !important;
  }
`;

export const CopyUrlButtonSelected = styled.button`
  width: auto;
  height: 28px;
  background: #ff0000;
  border: 1px solid #000000;
  box-shadow: 0px 4px 0px #000000;
  text-align: center;
  cursor: pointer;
  outline: none;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #fff !important;
  &:focus {
    transform: translateY(4px) !important;
    box-shadow: 0px 4px 0px #000000;
    background: #fff;
    color: #000 !important;
  }
`;

export const TapMoreContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 450px;
  margin-bottom: 50px;
  left: 48% !important;
  cursor: pointer !important;
  @media (max-width: 450px) {
    left: 40% !important;
  }
`;

export const TapMoreText = styled.h1`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700 !important;
  font-size: 12px;
  line-height: 14px;
  color: #fff;
  cursor: pointer;
`;

export const ProductInfoContainer = styled.div`
  position: absolute;
  background: #fff;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
