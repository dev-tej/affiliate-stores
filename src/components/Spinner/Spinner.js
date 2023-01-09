import React from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";

const SpinnerContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const override = css`
  width: 100%;
  border-color: #ffc323;
  display: grid;
  place-items: center;
`;

const Spinner = (props) => {
  return (
    <SpinnerContainer>
      <ClipLoader
        color={"#ffc323"}
        loading={props?.loading}
        css={override}
        size={50}
      />
    </SpinnerContainer>
  );
};

export default Spinner;
