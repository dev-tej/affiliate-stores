import React from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";

const LoaderContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #000;
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
