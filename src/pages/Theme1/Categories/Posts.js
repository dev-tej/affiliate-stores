import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
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
import { axiosInstance } from "../../../AxiosInstance";
import Loader from "../../../components/Loader";

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

const PostsDisplay = ({ feedData }) => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div>
      {feedData?.map((data, index) => {
        return (
          <div key={index}>
            <PostHeaderSection>
              <div>
                <PostHeaderInfluencerDp
                  src={`https://gallerify.s3-us-west-2.amazonaws.com/ipics/${data?.username}-circle.png`}
                />
              </div>
              <div style={{ marginTop: "-8px" }}>
                <PostHeaderInfluencerName>
                  {data?.name}
                </PostHeaderInfluencerName>
                <PostHeaderInfluencerPostedHeader>
                  Posted on {moment(data?.createdAt).format("MMM DD YYYY")}
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
  const { brand, slug, username } = useParams();
  const [userPostsData, setUserPostsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let fetchUserPostsData = async () => {
      setLoading(true);
      let result = await axiosInstance.get(
        `/${brand}/posts/${slug}/${username}?page=1`
      );
      setUserPostsData(result?.data);
      setLoading(false);
    };
    fetchUserPostsData();
  }, [brand, slug, username]);

  return loading ? (
    <Loader loading={loading} />
  ) : (
    <div>
      <PostsDisplay feedData={userPostsData} />
    </div>
  );
};

export default Posts;
