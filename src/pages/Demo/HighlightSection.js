import React from "react";
import {
  ProductionHighlightStories,
  DevelopmentHighlightStories,
} from "components/HighlightStories";
import toast, { Toaster } from "react-hot-toast";
// import Highlight1 from "assets/Theme1/Highlight1.jpg";
// import Highlight2 from "assets/Theme1/Highlight2.jpg";
import BrandBanner from "assets/LandingPage/BrandBanner.svg";
import numeral from "numeral";

// const HIGHLIGHTS_STORIES = [
//   {
//     content: () => {
//       return (
//         <video controls autoPlay muted className="highlightVideo">
//           <source
//             src="https://gallerify.s3.us-west-2.amazonaws.com/stores/video/highlight.mp4"
//             type="video/mp4"
//           />
//         </video>
//       );
//     },
//   },
//   {
//     content: () => {
//       return <img src={Highlight1} alt="img" className="highlightImage" />;
//     },
//   },
//   {
//     content: () => {
//       return <img src={Highlight2} alt="img" className="highlightImage" />;
//     },
//   },
// ];

const COLLECTION_IMAGES = [
  {
    image:
      "https://assets.myntassets.com/assets/images/15999792/2022/2/17/55afdb95-a8b1-4e24-bc91-bfdd5d15aa041645093961121-Anouk-Silver-Toned--Off-White-Oxidized-Stone-Studded--Beaded-1.jpg",
    url: "https://www.myntra.com/15999792",
  },
  {
    image:
      "https://assets.myntassets.com/assets/images/16319764/2022/5/12/3597080c-b623-4d57-8263-f2e9f1b939e91652355459020-all-about-you-Women-Brown--Gold-Toned-Ethnic-Motifs-Printed--1.jpg",
    url: "https://www.myntra.com/16319764",
  },
  {
    image:
      "https://assets.myntassets.com/assets/images/7800263/2018/12/3/75075912-5988-4477-a968-9207790809ec1543816625023-HERENOW-Women-Black--Orange-Printed-Straight-Kurta-9471543816623940-1.jpg",
    url: "https://www.myntra.com/7800263",
  },
  {
    image:
      "https://assets.myntassets.com/assets/images/8915463/2020/10/10/d237afd6-01c2-4607-9d0c-8f8513c184e01602270121614TaaviWomenMaroonBlueAjrakhHandBlockPrintSustainableMaxiSkirt1.jpg",
    url: "https://www.myntra.com/8915463",
  },
  {
    image:
      "https://assets.myntassets.com/assets/images/17049328/2022/4/27/25452c8f-8c67-4057-8487-502f6453e7971651059347639-Anouk-Women-Dresses-2931651059347035-1.jpg",
    url: "https://www.myntra.com/17049328",
  },
];

const HighlightSection = (props) => {
  const { data } = props;

  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  const handleCopyClick = (copyText) => {
    copyTextToClipboard(copyText)
      .then(() => {
        toast.success("Copied to Clipboard", {
          style: {
            border: "1px solid #11100d",
            padding: "16px",
            color: "#ffc323",
            background: "#11100d",
          },
          iconTheme: {
            primary: "#ffc323",
            secondary: "#11100d",
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const HIGHLIGHTS = data?.profileSection?.images?.map((val) => ({
    content: () => {
      return (
        <>
          {val?.includes("mp4") ? (
            <video controls autoPlay muted className="highlightVideo">
              <source src={val} type="video/mp4" />
            </video>
          ) : (
            <img src={val} alt="img" className="highlightImage" />
          )}
        </>
      );
    },
  }));

  return (
    <div>
      <Toaster position="top-center" />
      {!process.env.NODE_ENV || process.env.NODE_ENV === "development" ? (
        <div>
          <div id="highlightContainer">
            {data?.profileSection?.images?.length >= 1 && (
              <DevelopmentHighlightStories highlights={HIGHLIGHTS} />
            )}
            <div className="influencerInfoContainer">
              <div>
                <h1 className="influencerName">{data?.profileSection?.name}</h1>
                <h2 className="influencerUserName">
                  @{data?.profileSection?.username}
                </h2>
                <div className="influencerExtraInfo">
                  {data?.profileSection?.followers >= 1000 ? (
                    <h1 className="influencerFollowersCount">
                      {numeral(data?.profileSection?.followers)
                        .format("0a")
                        .toUpperCase()}{" "}
                      Followers
                    </h1>
                  ) : (
                    <h1 className="influencerFollowersCount">
                      {data?.profileSection?.followers} Followers
                    </h1>
                  )}
                  <div className="dotContainer"></div>
                  <h1 className="influencerCollectionCount">
                    {data?.profileSection?.collections} Collections
                  </h1>
                </div>
              </div>
              <div>
                <div className="influencerCollectionImagesDisplay">
                  {data?.profileSection?.products?.map((pic, index) => {
                    return (
                      <img
                        src={pic?.image}
                        alt="collectionImage"
                        key={index}
                        className="collectionImage"
                      />
                    );
                  })}
                </div>
                <h1 className="noOfProducts">
                  {data?.profileSection?.products?.length}+ Products
                </h1>
              </div>
            </div>
          </div>
          <div className="descriptionContainer">
            <h1 className="descriptionHeader">
              {data?.profileSection?.storeDescription}
            </h1>
            <img
              src={BrandBanner}
              alt="themeBanner"
              className="brandBannerImage"
            />
            {data?.couponSection?.map((coupon, index) => {
              return (
                <div className="discountContainer" key={index}>
                  <div>
                    <h1 className="discountContainerHeader">{coupon?.title}</h1>
                    <p className="discountContainerText">
                      {coupon?.description}
                    </p>
                  </div>
                  <i
                    className="fa-regular fa-copy"
                    style={{ fontSize: "22px" }}
                    onClick={() => handleCopyClick(coupon?.code)}
                  ></i>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          <div id="highlightContainer">
            {data?.profileSection?.images?.length >= 1 && (
              <ProductionHighlightStories highlights={HIGHLIGHTS} />
            )}
            <div className="influencerInfoContainer">
              <div>
                <h1 className="influencerName">{data?.profileSection?.name}</h1>
                <h2 className="influencerUserName">
                  @{data?.profileSection?.username}
                </h2>
                <div className="influencerExtraInfo">
                  {data?.profileSection?.followers >= 1000 ? (
                    <h1 className="influencerFollowersCount">
                      {numeral(data?.profileSection?.followers)
                        .format("0a")
                        .toUpperCase()}{" "}
                      Followers
                    </h1>
                  ) : (
                    <h1 className="influencerFollowersCount">
                      {data?.profileSection?.followers} Followers
                    </h1>
                  )}
                  <div className="dotContainer"></div>
                  <h1 className="influencerCollectionCount">
                    {data?.profileSection?.collections} Collections
                  </h1>
                </div>
              </div>
              <div>
                <div className="influencerCollectionImagesDisplay">
                  {data?.profileSection?.products?.map((pic, index) => {
                    return (
                      <img
                        src={pic?.image}
                        alt="collectionImage"
                        key={index}
                        className="collectionImage"
                      />
                    );
                  })}
                </div>
                <h1 className="noOfProducts">
                  {data?.profileSection?.products?.length}+ Products
                </h1>
              </div>
            </div>
          </div>
          <div className="descriptionContainer">
            <h1 className="descriptionHeader">
              {data?.profileSection?.storeDescription}
            </h1>
            <img
              src={BrandBanner}
              alt="themeBanner"
              className="brandBannerImage"
            />
            {data?.couponSection?.map((coupon, index) => {
              return (
                <div className="discountContainer" key={index}>
                  <div>
                    <h1 className="discountContainerHeader">{coupon?.title}</h1>
                    <p className="discountContainerText">
                      {coupon?.description}
                    </p>
                  </div>
                  <i
                    className="fa-regular fa-copy"
                    style={{ fontSize: "22px" }}
                    onClick={() => handleCopyClick(coupon?.code)}
                  ></i>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default HighlightSection;
