import React from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";

const LoaderContainer = styled.div`
  width: 390px;
  min-height: 100vh;
  display: flex;
  jusify-content: center;
  align-items: center;
`;

const override = css`
  display: flex;
  jusify-content: center;
  align-items: center;
  border-color: #a3a3a3;
`;

const Loader = (props) => {
  return (
    <LoaderContainer>
      <ClipLoader
        color={"#a3a3a3"}
        loading={props?.loading}
        css={override}
        size={50}
      />
    </LoaderContainer>
  );
};

export default Loader;
