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
  align-items: center;
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
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #c9c3c3;
  margin-bottom: -5px;
`;

export const ProductPrice = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #c9c3c3;
  margin-bottom: -2px;
`;

export const ProductDiscountPercentage = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  color: #e3bf35;
`;
