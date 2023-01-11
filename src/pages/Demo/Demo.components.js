import styled from "styled-components";

export const TabsSection = styled.div`
  width: 100%;
  height: auto;
  margin: 32px 0px;
  padding: 0px 24px;
`;

export const TabsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 24px;
  margin-bottom: 27px;
`;

export const TabItem = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: ${(props) => (props.selected ? "#F3D8B3" : "#BFBFBF")};
  text-decoration: ${(props) => (props.selected ? "underline" : "")};
  text-decoration-color: ${(props) => (props.selected ? "#F3D8B3" : "")};
  text-underline-offset: 11px;
  cursor: pointer;
`;

export const CollectionProductsDisplaySection = styled.div`
  width: 232px;
  height: 257px;
  background-image: url(${(props) => props.thumbnail});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 8px;
  border: 1px solid rgba(255, 243, 226, 0.5);
  position: relative;
`;
