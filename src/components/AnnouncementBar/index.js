import React from "react";
import Marquee from "react-fast-marquee";
import styled from "styled-components";

const TickerContainer = styled.div`
  margin-top: -50px !important;
  border: 1px solid ${(props) => props?.borderColor};
  border-left: 0;
  border-right: 0px;
`;

const TickerHeader = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props?.color};
  width: 100%;
`;

const index = (props) => {
  const { header, borderColor, color } = props;
  return (
    <TickerContainer borderColor={borderColor}>
      <Marquee gradient={false}>
        <TickerHeader color={color}>{header}</TickerHeader>
      </Marquee>
    </TickerContainer>
  );
};

export default index;
