import React, { useState, useEffect } from "react";
import Highlights from "./Highlights";
import ProductInfo from "./ProductInfo";
import Spinner from "../../components/Spinner/Spinner";

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

  // if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  //   alert("Development");
  // } else {
  //   alert("Production");
  // }

  return (
    <>
      <Highlights />
      <ProductInfo />
    </>
  );
};

export default AffiliateStores;
