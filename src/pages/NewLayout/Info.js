import React, { useState } from "react";
import {
  ProductData,
  ProductInfoSection,
  InfluencerDescription,
  InfluencerDp,
  InfluencerName,
  BrandGallery,
  BrandName,
  BrandHashtag,
  BrandGalleryContainer,
  BrandGalleryImages,
  CategoryContainer,
} from "./components";
import KiaraLogo from "../../assets/NewLayout/Kiara.svg";
import "./index.css";
import Products from "./Products";

const CATEGORIES = ["All", "Pants", "Shirts", "Hoodies"];

const Info = () => {
  const [categrory, setCategory] = useState("");

  return (
    <ProductData>
      <ProductInfoSection>
        <div>
          <InfluencerDp src={KiaraLogo} alt="influencerDp" />
        </div>
        <div>
          <InfluencerName>Kiara Advani's</InfluencerName>
          <InfluencerDescription>
            Top Picks from <span>Mango’s Autumn Winter Collection</span>
          </InfluencerDescription>
        </div>
      </ProductInfoSection>
      <BrandGallery>
        <div style={{ marginLeft: "20px" }}>
          <BrandName>MANGO</BrandName>
          <BrandHashtag>#iammyownmuse</BrandHashtag>
        </div>
        <BrandGalleryContainer>
          <BrandGalleryImages src="https://cdn.shopify.com/s/files/1/0398/7780/4188/files/Mango-September_22_344_compressed_1_1.jpg?v=1665033002" />
          <BrandGalleryImages src="https://cdn.shopify.com/s/files/1/0398/7780/4188/files/Mango-September_22_0024_compressed_alt.jpg?v=1665032552" />
          <BrandGalleryImages src="https://cdn.shopify.com/s/files/1/0398/7780/4188/files/Mango-September_22_0266_compressed.jpg?v=1665032368" />
        </BrandGalleryContainer>
      </BrandGallery>
      <CategoryContainer>
        {CATEGORIES?.map((cat, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                setCategory(cat);
              }}
              className={categrory === cat ? "selected" : "unSelected"}
            >
              {cat}
            </button>
          );
        })}
      </CategoryContainer>
      <hr />
      <Products />
    </ProductData>
  );
};

export default Info;
