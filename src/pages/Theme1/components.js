import styled from "styled-components";

export const ThemeContainer = styled.div`
  max-width: 480px;
  min-height: 100vh;
  background: #11100d;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding-bottom: 100px;
  margin-bottom: -100px;
  overflow-x: hidden;
`;

export const ThemeHighlightStoriesSection = styled.div`
  max-width: 480px;
  width: 100%;
`;

export const ThemeHighlightStoryContainer = styled.div`
  width: 100%;
  max-width: 480px !important;
  display: block;
  margin-left: auto;
  margin-right: auto;

  & img {
    width: 100% !important;
    height: 100% !important;
    aspect-ratio: 1/1;
  }
`;

export const ThemeHighlightVideoDisplay = styled.video`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: fill !important;
  &::-webkit-media-controls-panel {
    display: none !important;
    opacity: 1 !important;
  }
`;

export const InfluencerInfoContainer = styled.div`
  // position: absolute;
  // margin-top: -90px;
  width: 100%;
  padding: 10px;
  max-width: 480px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7) 40.58%,
    rgba(0, 0, 0, 0) 90.42%
  );
  font-family: Roboto;
`;

export const InfluencerName = styled.h1`
  font-style: normal;
  font-weight: bolder;
  font-size: 20px;
  color: #fff;
`;

export const InfluencerUsername = styled.h1`
  margin-top: -10px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #fff;
`;

export const InfluencerExtraInfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 8px;
  margin-top: -5px;
`;

export const InfluencerExtraInfoHeader = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #fff;
`;

export const InfluencerExtraInfoDiv = styled.div`
  width: 2px;
  height: 2px;
  background: #fff;
`;

export const InfluencerInfoDisplayProducts = styled.div`
  display: flex;

  & img {
    width: 20px;
    height: 20px;
    border-radius: 64px;
    margin-left: -5px;
  }
`;

export const MarketingContainer = styled.div`
  max-width: 480px;
  width: 100%;
`;

export const CheckOutSection = styled.div`
  width: 90%;
  margin: 24px auto;

  & h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: rgba(255, 245, 209, 0.9);
  }
`;

export const ThemeBrandBannerLogo = styled.img`
  width: 100%;
  max-width: 480px;
  height: auto;
`;

export const CouponContainer = styled.div`
  width: 80%;
  height: auto;
  margin: 24px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border-radius: 12px;
  padding: 17px;

  & h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 129.28%;
    color: #505050;
  }

  & p {
    margin-top: 6px;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 118.36%;
    color: #505050;
  }
`;

export const TabsSection = styled.div`
  width: 100%;
  height: auto;
  margin: 0px 24px;
`;

export const TabsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 24px;
  margin-bottom: 35px;
`;

export const TabItem = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: ${(props) => (props.selected ? "#F3D8B3" : "#BFBFBF")};
  text-decoration: ${(props) => (props.selected ? "underline" : "")};
  text-decoration-color: ${(props) => (props.selected ? "#F3D8B3" : "")};
  text-underline-offset: 11px;
  cursor: pointer;
`;
