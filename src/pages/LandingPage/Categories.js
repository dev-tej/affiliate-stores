import React from "react";
import { Carousel } from "3d-react-carousal";
import AnnouncementBar from "../../components/AnnouncementBar";
import {
  CategoriesInfoContainer,
  CategoryHeader,
  CarouselContainer,
  CarouselCategoryDisplay,
} from "./components";
import Products from "./Products";

const SLIDES = [
  <CarouselCategoryDisplay>
    <img
      src="https://cdn.shopify.com/s/files/1/0398/7780/4188/products/17024049_76_1400x.jpg?v=1665127056"
      alt="productImg"
    />
    <h1>100% Cotton Dress</h1>
  </CarouselCategoryDisplay>,
  <CarouselCategoryDisplay>
    <img
      src="https://cdn.shopify.com/s/files/1/0398/7780/4188/products/27051119_70_600x.jpg?v=1646550255"
      alt="productImg"
    />
    <h1>100% Cottom Sweatshirt</h1>
  </CarouselCategoryDisplay>,
  <CarouselCategoryDisplay>
    <img
      src="https://cdn.shopify.com/s/files/1/0398/7780/4188/products/37010259_99-99999999_01_600x.jpg?v=1665000885"
      alt="productImg"
    />
    <h1>100% Linen Dress</h1>
  </CarouselCategoryDisplay>,
];

const Categories = () => {
  return (
    <CategoriesInfoContainer>
      <CategoryHeader>Categories</CategoryHeader>
      <CarouselContainer>
        <Carousel
          slides={SLIDES}
          autoplay={true}
          interval={5000}
          arrows={false}
        />
      </CarouselContainer>
      <AnnouncementBar header={"Use code AASHNA40 to get 40% OFF"} borderColor={"#C7232F"} color={"#C7232F"} />
      <Products />
    </CategoriesInfoContainer>
  );
};

export default Categories;
