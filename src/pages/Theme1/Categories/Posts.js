import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  CarouselContainer,
  HorizontalLine,
  ImpressionsContainer,
  LikesHeader,
  PostDescriptionSection,
  PostHeaderInfluencerDp,
  PostHeaderInfluencerName,
  PostHeaderInfluencerPostedHeader,
  PostHeaderSection,
  PostsContentImage,
} from "./Posts.components";
import "./index.css";
import Products from "../../../components/Products";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const FEED_DATA = [
  {
    id: 0,
    dp: "https://gallerify.s3-us-west-2.amazonaws.com/ipics/swagata_dev-circle.png",
    title: "Swagata Dev",
    postedDate: "2022-12-20",
    content: [
      {
        thumbnail:
          "https://assets.myntassets.com/assets/images/2022/2/25/9f1fbb0b-3e5b-4c03-903c-201f20569e0b1645783766518-995EF721-F92D-4841-B715-B084936CFE84.jpeg",
        url: "https://www.instagram.com/p/Cl4HGpDhwom/",
        type: "image",
      },
      {
        thumbnail:
          "https://assets.myntassets.com/assets/images/2022/3/30/0c324e43-5a52-4a1c-be4a-fad3cd0a17a41648627295819-42B707B9-9135-406D-BFCF-BA48BE2DBD57.jpeg",
        url: "https://www.instagram.com/p/Cl4HGpDhwom/",
        type: "image",
      },
    ],
    products: [
      {
        tilte: "Swisse Glutathione",
        thumbnail:
          "https://cdn.shopify.com/s/files/1/0556/6264/1337/products/1Glutathione_30_400x.png?v=1663828075",
        url: "https://swisse.co.in/products/swisse-glutathione",
        price: "839",
        description: "Glutathione",
        discount: "50% OFF",
      },
      {
        tilte: "Swisse Collagen",
        thumbnail:
          "https://cdn.shopify.com/s/files/1/0556/6264/1337/products/1Collagen_HA_400x.png?v=1668928506",
        url: "https://swisse.co.in/products/swisse-collagen-hyaluronic-acid-with-peptides-vitamin-c-e-to-boost-skin-repair-regeneration-for-youthful-radiant-skin",
        price: "749",
        description: "Collagen",
        discount: "65% OFF",
      },
      {
        tilte: "Swisse Probiotics",
        thumbnail:
          "https://cdn.shopify.com/s/files/1/0556/6264/1337/products/1Probiotic_PrebioticGummies45_400x.png?v=1668928290",
        url: "https://swisse.co.in/products/swisseme-probiotics-prebiotic-gummies-probiotic-supplement-with-1-5-billion-cfu-per-serving-zero-added-sugar-fridge-free-probiotic-30-gummies-one-gummy-per-serving-orange-flavour",
        price: "659",
        description: "Probiotics",
        discount: "30% OFF",
      },
      {
        tilte: "Swisse Glutathione",
        thumbnail:
          "https://cdn.shopify.com/s/files/1/0556/6264/1337/products/1Glutathione_30_400x.png?v=1663828075",
        url: "https://swisse.co.in/products/swisse-glutathione",
        price: "839",
        description: "Glutathione",
        discount: "10% OFF",
      },
    ],
    caption:
      "I create fashion content and express myself through my dressing style. I create fashion content and express myself through my dressing style express",
    likes: 100,
    comments: [
      {
        id: 0,
        name: "Aashna Shroff",
        comment: "Okkk",
        dp: "https://gallerify.s3-us-west-2.amazonaws.com/ipics/aashnashroff-circle.png",
        time: "2022-12-21T00:13:30 PM",
      },
    ],
  },
  {
    id: 0,
    dp: "https://gallerify.s3-us-west-2.amazonaws.com/ipics/swagata_dev-circle.png",
    title: "Swagata Dev",
    postedDate: "2022-12-20",
    content: [
      {
        thumbnail:
          "https://assets.myntassets.com/assets/images/2022/4/18/6a721a34-3cad-408b-833d-f9b1c3e87f221650297562765-FCEA3C01-3003-4816-AD54-C5739DF57AD4.jpeg",
        url: "https://www.instagram.com/p/Cl4HGpDhwom/",
        type: "image",
      },
      {
        thumbnail:
          "https://assets.myntassets.com/assets/images/2022/2/15/33032a80-4008-4243-bc17-830583854a761644915367149-BCFE353E-10DD-4ADD-AE40-485F29080605.jpeg",
        url: "https://www.instagram.com/p/Cl4HGpDhwom/",
        type: "image",
      },
    ],
    products: [
      {
        tilte: "Swisse Glutathione",
        thumbnail:
          "https://cdn.shopify.com/s/files/1/0556/6264/1337/products/1Glutathione_30_400x.png?v=1663828075",
        url: "https://swisse.co.in/products/swisse-glutathione",
        price: "839",
        description: "Glutathione",
        discount: "50% OFF",
      },
      {
        tilte: "Swisse Collagen",
        thumbnail:
          "https://cdn.shopify.com/s/files/1/0556/6264/1337/products/1Collagen_HA_400x.png?v=1668928506",
        url: "https://swisse.co.in/products/swisse-collagen-hyaluronic-acid-with-peptides-vitamin-c-e-to-boost-skin-repair-regeneration-for-youthful-radiant-skin",
        price: "749",
        description: "Collagen",
        discount: "65% OFF",
      },
      {
        tilte: "Swisse Probiotics",
        thumbnail:
          "https://cdn.shopify.com/s/files/1/0556/6264/1337/products/1Probiotic_PrebioticGummies45_400x.png?v=1668928290",
        url: "https://swisse.co.in/products/swisseme-probiotics-prebiotic-gummies-probiotic-supplement-with-1-5-billion-cfu-per-serving-zero-added-sugar-fridge-free-probiotic-30-gummies-one-gummy-per-serving-orange-flavour",
        price: "659",
        description: "Probiotics",
        discount: "30% OFF",
      },
      {
        tilte: "Swisse Glutathione",
        thumbnail:
          "https://cdn.shopify.com/s/files/1/0556/6264/1337/products/1Glutathione_30_400x.png?v=1663828075",
        url: "https://swisse.co.in/products/swisse-glutathione",
        price: "839",
        description: "Glutathione",
        discount: "10% OFF",
      },
    ],
    caption:
      "I create fashion content and express myself through my dressing style. I create fashion content and express myself through my dressing style express",
    likes: 100,
    comments: [
      {
        id: 0,
        name: "Aashna Shroff",
        comment: "Okkk",
        dp: "https://gallerify.s3-us-west-2.amazonaws.com/ipics/aashnashroff-circle.png",
        time: "2022-12-21T00:13:30 PM",
      },
    ],
  },
];

const PostsDisplay = ({ feedData }) => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div>
      {feedData?.map((data, index) => {
        return (
          <div key={index}>
            <PostHeaderSection>
              <div>
                <PostHeaderInfluencerDp src={data?.dp} />
              </div>
              <div style={{ marginTop: "-8px" }}>
                <PostHeaderInfluencerName>
                  {data?.title}
                </PostHeaderInfluencerName>
                <PostHeaderInfluencerPostedHeader>
                  Posted on {data?.postedDate}
                </PostHeaderInfluencerPostedHeader>
              </div>
            </PostHeaderSection>
            <CarouselContainer>
              <Carousel
                showDots
                responsive={responsive}
                removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                dotListclassName={"Posts_customDots"}
                autoPlay
                infinite
                // autoPlaySpeed={1000}
              >
                {data?.content?.map((content, index) => {
                  return (
                    <div key={index}>
                      <PostsContentImage src={content?.thumbnail} />
                    </div>
                  );
                })}
              </Carousel>
            </CarouselContainer>
            <div style={{ width: "90%" }}>
              <Products products={data?.products} />
            </div>
            <ImpressionsContainer>
              <div>
                <i
                  className="fa-solid fa-heart"
                  style={{ fontSize: "16px", color: "#ADADAD" }}
                ></i>
                <LikesHeader>{data?.likes} Likes</LikesHeader>
              </div>
              <div>
                <i
                  className="fa-regular fa-bookmark"
                  style={{ fontSize: "16px", color: "#ADADAD" }}
                ></i>
                <i
                  className="fa-solid fa-share-nodes"
                  style={{ fontSize: "16px", color: "#ADADAD" }}
                ></i>
              </div>
            </ImpressionsContainer>
            <PostDescriptionSection>
              {seeMore ? (
                <p>
                  {data?.caption} &nbsp;&nbsp;
                  <span onClick={() => setSeeMore(!seeMore)}>SEE LESS</span>
                </p>
              ) : (
                <p>
                  {data?.caption?.substring(0, 100)}{" "}
                  <span onClick={() => setSeeMore(!seeMore)}>SEE MORE</span>
                </p>
              )}
            </PostDescriptionSection>
            <HorizontalLine />
          </div>
        );
      })}
    </div>
  );
};

const Posts = () => {
  return (
    <div>
      <PostsDisplay feedData={FEED_DATA} />
    </div>
  );
};

export default Posts;
