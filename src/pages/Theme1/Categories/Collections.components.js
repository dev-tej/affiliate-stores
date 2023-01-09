import styled from "styled-components";

export const CollectionContainer = styled.div`
  width: 90%;
`;

export const CollectionTitle = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #bfbfbf;
`;

export const CollectionProductsContainer = styled.div`
  margin-top: 16px;
  display: grid;
  grid-auto-flow: column;
  column-gap: 20px;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CollectionProductSection = styled.div`
  width: 250px;
  height: 300px;
  margin: 10px 0px;
  background-image: url(${(props) => props.thumbnail});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 8px;
  position: relative;
`;

export const CollectionProductsDisplay = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.84) 50.46%,
    rgba(0, 0, 0, 0) 100.27%
  );
  position: absolute;
  bottom: 0;
  margin-bottom: -1px;
`;

export const CollectionProductsInfo = styled.div`
  width: 65%;
`;

export const CollectionProductName = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  background: linear-gradient(137.45deg, #fffbed 2.5%, #feeeb2 105.48%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const CollectionProductPrice = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  background: linear-gradient(137.45deg, #fffbed 2.5%, #feeeb2 105.48%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const CollectionProductBuyNowButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  width: auto;
  height: 22px;
  background: #ffb546;
  border-radius: 77px;
  margin-bottom: 10px;
  margin-right: 10px;

  & P {
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    color: #000000;
  }
`;

export const ProductDetailsHeaderSection = styled.div`
  width: 100%;
  // padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductDetailsProductName = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #fff;
`;

export const ProductDetailsInfoSection = styled.div`
  width: 100%;
  margin-top: -5px;
  position: relative;
`;

export const ProductDetailsImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 390px;
`;

export const ProductDetailsPriceContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 4px 10px;
  position: absolute;
  right: 0;
  margin-top: -37px;
  width: 81px;
  height: 26px;
  background: #fff;

  & h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    text-decoration-line: line-through;
    color: #000;
  }

  & h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: #000;
  }
`;

export const ProductDetailsImagesContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: -5px;

  & img {
    width: 74px;
    height: 74px;
  }
`;

export const ProductDetailsSizeHeader = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #fff;
  margin-left: 10px;
`;

export const ProductDetailsSizeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  column-gap: 10px;
  margin-left: 10px;

  & button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 6px 12px;
    gap: 10px;
    width: auto;
    height: 26px;
    border: 1px solid #fff;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    text-align-center;
    color: #000;
  }
`;

export const ProductDescription = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #999999;
  padding: 10px 14px;
  margin-top: -10px;

  & span {
    font-weight: bolder;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #a3a3a3;
  padding: 10px;
`;

export const AddToBagButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  gap: 8px;
  width: 159px;
  height: 51px;
  border: 1px solid #ffb546;
  border-radius: 77px;
  background: transparent;

  & p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #ffb546;
  }
`;

export const BuyNowButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  gap: 8px;
  width: 159px;
  height: 51px;
  background: #ffb546;
  border-radius: 77px;
  border: none;
  outline: none;

  & p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #11100d;
  }
`;

export const SheetProductDisplay = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 10px;
  margin-top: -10px;
  margin-left: 10px;

  & button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 6px;
    gap: 10px;
    width: 27px;
    height: 26px;
    border: 1px solid #8c8888;
    border-radius: 6px;

    & p {
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 9px;
      color: #8c8888;
    }
  }
`;

export const QuantityValue = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #ffc323;
`;

export const CollectionCarouselContainer = styled.div`
  width: 100%;
`;

export const CollectionPostsContentImage = styled.img`
  width: 100%;
  height: 400px;
  aspect-ratio: 16/9;
`;

export const CollectionSheetCloseContainer = styled.div`
  position: absolute;
  z-index: 999999999;
  right: 0;
  margin-right: 23px;
  margin-top: 14px;
  width: 24.17px;
  height: 24.17px;
  background: #fff;
  border-radius: 4000px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CollectionPriceContainer = styled.div`
  margin: 20px 16px;
`;

export const CollectionPriceSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 8px;
`;

export const CollectionMRP = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 16px;
  color: #efefef;
`;

export const CollectionOriginalPrice = styled.h1`
  font-family: "Lora";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-decoration-line: line-through;
  color: #a3a3a3;
`;

export const CollectionDiscountText = styled.h1`
  margin-top: -5px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #e3bf35;
`;

export const CollectionProductInfoSection = styled.div`
  height: 350px;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CollectionProductTitle = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #efefef;
  margin-left: 16px;

  & span {
    font-weight: bolder;
  }
`;

export const SpinnerInfoContainer = styled.div`
  margin-top: 10px;
  width: 90%;
  display: grid;
  place-items: center;

  & h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: #dedede;
  }

  & p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #999999;
  }
`;
