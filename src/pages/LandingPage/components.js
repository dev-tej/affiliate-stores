import styled from "styled-components";

export const HighlightStoriesSection = styled.div`
  max-width: 390px;
  width: 100%;
  position: fixed;
  top: 0;
`;

export const HighlightStoryContainer = styled.div`
  width: 100%;
  & img {
    width: 100% !important;
    height: 100% !important;
  }
`;

export const ProductInfoContainer = styled.div`
  margin-top: 354px;
  isolation: isolate;
`;

export const HeaderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 72px 0px 32px;
  gap: 25px;
  isolation: isolate;
  width: 100%;
  height: 50px !important;
  background: #ffffff;
  border: 1px solid #c7c7c7;
  box-shadow: 0px -3px 3px rgba(0, 0, 0, 0.25) !important;
  border-radius: 15px;
`;

export const InfluencerInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  gap: 16px;
  position: absolute;
  width: 330px;
  height: auto !important;
  background: #ffffff;
  border: 1px solid #c7c7c7;
  border-radius: 58px;
  margin-top: -125px;
`;

export const InfluencerInfoSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 16px;
`;

export const InfluencerDp = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 57px;
`;

export const InfluencerDataSection = styled.div`
  margin-top: -10px !important;
`;

export const InfluencerName = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  color: #070707;
`;

export const InfluencerUsername = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #070707;
  margin-top: -20px;
`;

export const ShareLogo = styled.img`
  width: 30.25px;
  height: 30.25px;
`;

export const MetaSection = styled.div`
  margin-top: -10px !important;

  & h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #070707;
    text-align: center;

    & span {
      font-weight: bold;
    }
  }
`;

export const BrandBannerLogo = styled.img`
  width: 100%;
  max-width: 390px;
  height: auto;
  margin-top: -10px !important;
  margin-bottom: -20px;
`;

export const CategoriesInfoContainer = styled.div`
  padding: 0px;
  width: 390px;
  height: auto;
  background: #e9e9e9;
  border: 1px solid #c7c7c7;
  box-shadow: 0px -3px 3px rgba(0, 0, 0, 0.15);
  border-radius: 15px 15px 0px 0px;
  isolation: isolate;
`;

export const CategoryHeader = styled.h1`
  margin-top: 12px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #070707;
  margin-left: 24px;
`;

export const CarouselContainer = styled.div`
  margin-top: 33px;
  margin-bottom: 100px;
`;

export const CarouselCategoryDisplay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: auto;
  background: #ffffff;
  border: 2px solid #ffffff;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.06);
  border-radius: 19px;

  & img {
    width: 100%;
    height: 350px;
    border-radius: 19px 19px 0px 0px;
  }

  & h1 {
    margin-top: 5px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 36px;
    text-align: center;
    color: #000000;
  }
`;

export const ProductsContainer = styled.div`
  margin: 40px 0px;

  & h1 {
    margin-left: 24px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #070707;
  }
`;

export const ProductDisplay = styled.div`
  margin: 24px;
`;

export const ProductMainImage = styled.img`
  width: 100%;
  height: 400px;
  display: block;
  margin: auto;
`;

export const MiniProductsContainer = styled.div`
  width: 170px;
  display: flex;
  justify-content: flex;
  flex-direction: row;
  column-gap: 0px !important;

  & img {
    width: 100px !important;
    height: 80px;
    object-fit: contain;
  }
`;

export const ProductDetailsContainer = styled.div`
  margin-top: 10px;
`;

export const ProductName = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #000000;
`;

export const ProductPriceContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: -25px !important;
`;

export const ProductDiscountPrice = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400 !important;
  font-size: 16px;
  line-height: 24px;
  text-decoration-line: line-through;
  color: #949494 !important;
`;

export const ProductPrice = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;

export const BuyProductButton = styled.button`
  margin-top: 12px;
  display: block !important;
  margin-left: auto !important;
  margin-right: auto !important;
  width: 90%;
  height: 44px;
  background: #c7232f;
  border-radius: 7px;
  outline: none;
  border: none;

  & p {
    margin-top: 10px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: #ffffff;
    text-transform: uppercase;
  }
`;
