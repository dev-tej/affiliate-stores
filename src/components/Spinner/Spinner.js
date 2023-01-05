import React from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";

const LoaderContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  jusify-content: center;
  background: rgba(0, 0, 0, 0.5);
  align-items: center;
`;

const override = css`
  width: 100%;
  display: flex;
  jusify-content: center;
  align-items: center;
  border-color: #ffc323;
`;

const Loader = (props) => {
  return (
    <LoaderContainer>
      <ClipLoader
        color={"#ffc323"}
        loading={props?.loading}
        css={override}
        size={50}
      />
    </LoaderContainer>
  );
};

export default Loader;
