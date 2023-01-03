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
          "https://scontent.cdninstagram.com/v/t51.2885-15/318306971_209977388093861_9038554857697577459_n.jpg?stp=dst-jpg_e35_p480x480&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=fCINWln0k14AX9TPLqL&edm=AMO9-JQAAAAA&ccb=7-5&oh=00_AfCSUDTZKa6PWL0ZlygF0aUdZmtDtDYiJNNE5NF7F2jpng&oe=63B43390&_nc_sid=b9f2ee",
        url: "https://www.instagram.com/p/Cl4HGpDhwom/",
        type: "image",
      },
      {
        thumbnail:
          "https://scontent.cdninstagram.com/v/t51.2885-15/318376449_511898034328820_3555535745463341896_n.jpg?stp=dst-jpg_e15_p640x640&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=gDa-SbWu54gAX9YDUCp&edm=AMO9-JQAAAAA&ccb=7-5&oh=00_AfBIHOORkJsBaHR8P6oyBafIDLJdiwGSv_lJ0oZ1sAatOg&oe=63B42FE5&_nc_sid=b9f2ee",
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
          "https://scontent.cdninstagram.com/v/t51.2885-15/318306971_209977388093861_9038554857697577459_n.jpg?stp=dst-jpg_e35_p480x480&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=fCINWln0k14AX9TPLqL&edm=AMO9-JQAAAAA&ccb=7-5&oh=00_AfCSUDTZKa6PWL0ZlygF0aUdZmtDtDYiJNNE5NF7F2jpng&oe=63B43390&_nc_sid=b9f2ee",
        url: "https://www.instagram.com/p/Cl4HGpDhwom/",
        type: "image",
      },
      {
        thumbnail:
          "https://scontent.cdninstagram.com/v/t51.2885-15/318376449_511898034328820_3555535745463341896_n.jpg?stp=dst-jpg_e15_p640x640&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=gDa-SbWu54gAX9YDUCp&edm=AMO9-JQAAAAA&ccb=7-5&oh=00_AfBIHOORkJsBaHR8P6oyBafIDLJdiwGSv_lJ0oZ1sAatOg&oe=63B42FE5&_nc_sid=b9f2ee",
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
