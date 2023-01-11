import React from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";

const SpinnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #11100d;
`;

const override = css`
  width: 100%;
  border-color: #ffc323;
  display: grid;
  place-items: center;
  background: #11100d;
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
