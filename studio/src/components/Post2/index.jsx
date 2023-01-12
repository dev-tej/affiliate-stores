import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as HeartBlack } from "../../assets/heartBlack.svg";
//import { ReactComponent as Wishlist } from '../../assets/wishlist.svg'
import { ReactComponent as Wishlist } from "../../assets/wishlist.svg";
import { ReactComponent as BookmarkIcon } from "../../assets/bokmark-icon.svg";
import { ReactComponent as ShareIcon } from "../../assets/share-icon.svg";
import PostSlideBanner from "../postSlideImage";
import VideoContainer from "../VideoContainer";
import productImg1 from "../../assets/productImg-1.jpg";
import "./post.scss";

function PostSecond({
  video = false,
  profileDetails = {},
  onProfileClick = "",
}) {
  //const imageDummy = "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_400,c_limit,fl_progressive/assets/images/2022/12/15/2f98dc81-f574-40d9-989f-d4f549cc48291671116151641-47.jpg"
  const navigate = useNavigate();

  const goToProfile = () => {
    if (onProfileClick) {
      navigate(onProfileClick);
      return;
    }
    navigate("/profileDetail");
  };

  return (
    <div className="postwarpper--grid">
      <div className="header-post-top">
        <div className="postuser--imgweb">
          <img
            src={
              profileDetails?.media?.thumbnail
                ? profileDetails?.media?.thumbnail
                : "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            }
            alt="image"
          />
        </div>
        <div className="post-aside-flex">
          <h4 className="post-wigtname-usr" onClick={() => goToProfile()}>
            {profileDetails.title || ""}
          </h4>
          <p className="poste-datetime">Posted on 12 June</p>
        </div>
      </div>
      <div className="banner-sliderpost">
        {video ? <VideoContainer /> : <PostSlideBanner />}
      </div>
      <div className="relatedContent-post">
        {profileDetails?.overlayOptions?.details?.meta?.map((val, index) => {
          return (
            <div className="grid-related-postcol" key={index}>
              <div className="prodt--img-relatd">
                <img
                  src={val?.thumbnail ? val?.thumbnail : productImg1}
                  alt="postImage"
                />
              </div>
              <div className="related-post-content">
                <h4 className="title-prodt-webhead">{val?.title || ""}</h4>
                <span className="price-tagpost">₹{val?.price || ""}</span>
                <span className="price-discpost">{val?.discount || ""}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer-postdisc-web">
        <div className="header-iconweb">
          <div className="fst-flexweb--icon">
            <HeartBlack />{" "}
            <span className="wishlist-txt">{profileDetails?.likes} Likes</span>
          </div>
          <div className="scnd-flexweb-icon">
            <button className="btn btn-iconsweb-wg">
              <BookmarkIcon />
            </button>
            <button className="btn btn-iconsweb-wg">
              <ShareIcon />
            </button>
          </div>
        </div>
        <div className="post-discarea--widgit">
          <p>{profileDetails?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default PostSecond;
