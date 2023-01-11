import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Products from "components/Products";
import moment from "moment";

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

const FeedDisplay = ({ feedData }) => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <>
      {feedData?.map((data, index) => {
        return (
          <div key={index} className="postsContentContainer">
            <div className="postsHeaderSection">
              <div>
                <img
                  src={`https://gallerify.s3-us-west-2.amazonaws.com/ipics/${data?.username}-circle.png`}
                  alt="influencerDp"
                  className="influencerDp"
                />
              </div>
              <div className="postInfluencerInfoContainer">
                <h1 className="influencerName">
                  {data?.name || "Aashna Shroff"}
                </h1>
                <h2 className="influencerContentPostedDate">
                  Posted on {moment(data?.createdAt).format("DD MMMM")}
                </h2>
              </div>
            </div>
            <Carousel
              showDots
              responsive={responsive}
              removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
              dotListclassName={"InfluencerPosts_customDots"}
              autoPlay
              infinite
            >
              {data?.content?.map((content, index) => {
                return (
                  <div key={index}>
                    <img
                      src={content?.thumbnail}
                      alt="contentImage"
                      className="influencerPostsContentImage"
                    />
                  </div>
                );
              })}
            </Carousel>
            <Products products={data?.products} />
            <div className="postsImpressionContainer">
              <div className="postsLikesContainer">
                <i
                  className="fa-solid fa-heart"
                  style={{ fontSize: "16px", color: "#dedede" }}
                ></i>
                <h1 className="postsContentLikes">
                  {data?.likes || 100} Likes
                </h1>
              </div>
              <div className="postsLikesContainer">
                <i
                  className="fa-regular fa-bookmark"
                  style={{ fontSize: "16px", color: "#dedede" }}
                ></i>
                <i
                  className="fa-solid fa-share-nodes"
                  style={{ fontSize: "16px", color: "#dedede" }}
                ></i>
              </div>
            </div>
            <div className="postsDescriptionContainer">
              {seeMore ? (
                <p>
                  {data?.caption ||
                    "I create fashion content and express myself through my dressing style. I create fashion content and express myself through my dressing style express"}{" "}
                  &nbsp;&nbsp;
                  <span onClick={() => setSeeMore(!seeMore)}>SEE LESS</span>
                </p>
              ) : (
                <p>
                  {data?.caption?.substring(0, 100) ||
                    "I create fashion content and express myself through my dressing style. I create fashion content and express myself through my dressing style express"?.substring(
                      0,
                      100
                    )}{" "}
                  <span onClick={() => setSeeMore(!seeMore)}>SEE MORE</span>
                </p>
              )}
            </div>
            <hr className="horizontalLine" />
          </div>
        );
      })}
    </>
  );
};

const Posts = (props) => {
  const { data } = props;
  return <FeedDisplay feedData={data} />;
};

export default Posts;
