import React, { useState, useEffect } from "react";
import Highlights from "./Highlights";
import ProductInfo from "./ProductInfo";
import Spinner from "../../components/Spinner/Spinner"

const AffiliateStores = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   if (loading) {
  //     setLoading(true);
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 3000);
  //   }
  // }, [loading]);

  return (
    <>
      <Highlights />
      <ProductInfo />
    </>
  );
};

export default AffiliateStores;
