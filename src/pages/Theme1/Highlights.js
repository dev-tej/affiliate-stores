import React from "react";
import {
  ProductionHighlightStories,
  DevelopmentHighlightStories,
} from "../../components/HighlightStories";
import {
  InfluencerExtraInfoContainer,
  InfluencerExtraInfoDiv,
  InfluencerExtraInfoHeader,
  InfluencerInfoContainer,
  InfluencerInfoDisplayProducts,
  InfluencerName,
  InfluencerUsername,
  ThemeHighlightStoriesSection,
  ThemeHighlightStoryContainer,
  ThemeHighlightVideoDisplay,
} from "./components";

const HIGHLIGHTS_STORIES = [
  {
    content: () => {
      return (
        <ThemeHighlightStoryContainer>
          <ThemeHighlightVideoDisplay controls autoPlay muted>
            <source
              src="https://gallerify.s3.us-west-2.amazonaws.com/stores/video/story.mp4"
              type="video/mp4"
            />
          </ThemeHighlightVideoDisplay>
        </ThemeHighlightStoryContainer>
      );
    },
  },
  {
    content: () => {
      return (
        <ThemeHighlightStoryContainer>
          <img
            src="https://gallerify.s3-us-west-2.amazonaws.com/instaphosts/18046848607307716.jpg"
            alt="img"
          />
        </ThemeHighlightStoryContainer>
      );
    },
  },
  {
    content: () => {
      return (
        <ThemeHighlightStoryContainer>
          <img
            src="https://gallerify.s3-us-west-2.amazonaws.com/instaphosts/17887530464516933.jpg"
            alt="img"
          />
        </ThemeHighlightStoryContainer>
      );
    },
  },
];

const ThemeHighlights = () => {
  return (
    <ThemeHighlightStoriesSection>
      {!process.env.NODE_ENV || process.env.NODE_ENV === "development" ? (
        <div style={{ position: "relative" }}>
          <DevelopmentHighlightStories highlights={HIGHLIGHTS_STORIES} />
          <InfluencerInfoContainer>
            <div>
              <InfluencerName>Aashna Shroff</InfluencerName>
              <InfluencerUsername>@aashnashroff</InfluencerUsername>
              <InfluencerExtraInfoContainer>
                <InfluencerExtraInfoHeader>
                  12K Followers
                </InfluencerExtraInfoHeader>
                <InfluencerExtraInfoDiv />
                <InfluencerExtraInfoHeader>
                  12 Collections
                </InfluencerExtraInfoHeader>
              </InfluencerExtraInfoContainer>
            </div>
            <div>
              <InfluencerInfoDisplayProducts>
                <img
                  src="https://cdn.shopify.com/s/files/1/0556/6264/1337/products/1AOdourlessHighStrengthWildFish_200Caps__1000x1000_FS_8808147c-4e59-4f06-a391-b8cdaca4f4b9_400x.png?v=1668656955"
                  alt="prodImg"
                />
                <img
                  src="https://cdn.shopify.com/s/files/1/0556/6264/1337/products/1womensMulti60_400x.png?v=1662527544"
                  alt="prodImg"
                />
                <img
                  src="https://cdn.shopify.com/s/files/1/0556/6264/1337/products/1_Mens_Multi_30_400x.png?v=1655301309"
                  alt="prodImg"
                />
                <img
                  src="https://cdn.shopify.com/s/files/1/0556/6264/1337/products/BiotinGummies_400x.png?v=1670314155"
                  alt="prodImg"
                />
              </InfluencerInfoDisplayProducts>
              <InfluencerExtraInfoHeader>
                31+ Products
              </InfluencerExtraInfoHeader>
            </div>
          </InfluencerInfoContainer>
        </div>
      ) : (
        <div>
          <ProductionHighlightStories highlights={HIGHLIGHTS_STORIES} />
          <InfluencerInfoContainer>
            <div>
              <InfluencerName>Aashna Shroff</InfluencerName>
              <InfluencerUsername>@aashnashroff</InfluencerUsername>
              <InfluencerExtraInfoContainer>
                <InfluencerExtraInfoHeader>
                  12K Followers
                </InfluencerExtraInfoHeader>
                <InfluencerExtraInfoDiv />
                <InfluencerExtraInfoHeader>
                  12 Collections
                </InfluencerExtraInfoHeader>
              </InfluencerExtraInfoContainer>
            </div>
            <div>
              <InfluencerInfoDisplayProducts>
                <img
                  src="https://cdn.shopify.com/s/files/1/0556/6264/1337/products/1AOdourlessHighStrengthWildFish_200Caps__1000x1000_FS_8808147c-4e59-4f06-a391-b8cdaca4f4b9_400x.png?v=1668656955"
                  alt="prodImg"
                />
                <img
                  src="https://cdn.shopify.com/s/files/1/0556/6264/1337/products/1womensMulti60_400x.png?v=1662527544"
                  alt="prodImg"
                />
                <img
                  src="https://cdn.shopify.com/s/files/1/0556/6264/1337/products/1_Mens_Multi_30_400x.png?v=1655301309"
                  alt="prodImg"
                />
                <img
                  src="https://cdn.shopify.com/s/files/1/0556/6264/1337/products/BiotinGummies_400x.png?v=1670314155"
                  alt="prodImg"
                />
              </InfluencerInfoDisplayProducts>
              <InfluencerExtraInfoHeader>
                31+ Products
              </InfluencerExtraInfoHeader>
            </div>
          </InfluencerInfoContainer>
        </div>
      )}
    </ThemeHighlightStoriesSection>
  );
};

export default ThemeHighlights;
