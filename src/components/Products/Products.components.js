import styled from "styled-components";

export const ProductsDisplayContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-auto-flow: column;
  column-gap: 20px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ProductSection = styled.div`
  display: flex;
  justify-content: flex-start;
  column-gap: 12px;
  align-items: flex-start;
  padding: 8px 12px;
  gap: 12px;
  width: 192px;
  height: 78px;
  border: 0.5px solid #c0c0c0;
  border-radius: 4px;
`;

export const ProductImage = styled.img`
  width: 54px;
  height: 62px;
`;

export const ProductName = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #dedede;
`;

export const ProductPrice = styled.p`
  margin-top: 4px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #dedede;
`;

export const ProductDiscountPercentage = styled.h1`
  margin-top: 4px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  color: #e3bf35;
`;
