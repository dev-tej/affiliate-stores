import React from "react";
import { Carousel } from "3d-react-carousal";

const index = (props) => {
  const { slides } = props;
  return (
    <Carousel slides={slides} autoplay={true} interval={5000} arrows={false} />
  );
};

export default index;
