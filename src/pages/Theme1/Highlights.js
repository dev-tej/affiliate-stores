import React, { useContext } from "react";
import { UserStoreData } from "./index";
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
import numeral from "numeral";

const ThemeHighlights = () => {
  const storeData = useContext(UserStoreData);

  const HIGHLIGHTS = storeData?.profileSection?.images?.map((val) => ({
    content: () => {
      return (
        <ThemeHighlightStoryContainer>
          {val?.includes("mp4") ? (
            <ThemeHighlightVideoDisplay controls autoPlay muted>
              <source src={val} type="video/mp4" />
            </ThemeHighlightVideoDisplay>
          ) : (
            <ThemeHighlightStoryContainer>
              <img src={val} alt="img" />
            </ThemeHighlightStoryContainer>
          )}
        </ThemeHighlightStoryContainer>
      );
    },
  }));

  return (
    <ThemeHighlightStoriesSection>
      {!process.env.NODE_ENV || process.env.NODE_ENV === "development" ? (
        <div style={{ position: "relative" }}>
          {storeData?.profileSection?.images?.length >= 1 && (
            <DevelopmentHighlightStories highlights={HIGHLIGHTS} />
          )}
          <InfluencerInfoContainer>
            <div>
              <InfluencerName>{storeData?.profileSection?.name}</InfluencerName>
              <InfluencerUsername>
                @{storeData?.profileSection?.username}
              </InfluencerUsername>
              <InfluencerExtraInfoContainer>
                {storeData?.profileSection?.followers >= 1000 ? (
                  <InfluencerExtraInfoHeader>
                    {numeral(storeData?.profileSection?.followers)
                      ?.format("0a")
                      ?.toUpperCase()}{" "}
                    Followers
                  </InfluencerExtraInfoHeader>
                ) : (
                  <InfluencerExtraInfoHeader>
                    {storeData?.profileSection?.followers} Followers
                  </InfluencerExtraInfoHeader>
                )}
                <InfluencerExtraInfoDiv />
                <InfluencerExtraInfoHeader>
                  {storeData?.profileSection?.collections} Collections
                </InfluencerExtraInfoHeader>
              </InfluencerExtraInfoContainer>
            </div>
            <div>
              <InfluencerInfoDisplayProducts>
                {storeData?.profileSection?.products?.map((prod, index) => {
                  return (
                    <img
                      src={prod?.image}
                      onClick={() => window.open(prod?.url)}
                      alt="prodImg"
                      key={index}
                    />
                  );
                })}
              </InfluencerInfoDisplayProducts>
              <InfluencerExtraInfoHeader>
                {storeData?.profileSection?.products?.length}+ Products
              </InfluencerExtraInfoHeader>
            </div>
          </InfluencerInfoContainer>
        </div>
      ) : (
        <div>
          {storeData?.profileSection?.images?.length >= 1 && (
            <ProductionHighlightStories highlights={HIGHLIGHTS} />
          )}
          <InfluencerInfoContainer>
            <div>
              <InfluencerName>{storeData?.profileSection?.name}</InfluencerName>
              <InfluencerUsername>
                @{storeData?.profileSection?.username}
              </InfluencerUsername>
              <InfluencerExtraInfoContainer>
                {storeData?.profileSection?.followers >= 1000 ? (
                  <InfluencerExtraInfoHeader>
                    {numeral(storeData?.profileSection?.followers)
                      ?.format("0a")
                      ?.toUpperCase()}{" "}
                    Followers
                  </InfluencerExtraInfoHeader>
                ) : (
                  <InfluencerExtraInfoHeader>
                    {storeData?.profileSection?.followers} Followers
                  </InfluencerExtraInfoHeader>
                )}
                <InfluencerExtraInfoDiv />
                <InfluencerExtraInfoHeader>
                  {storeData?.profileSection?.collections} Collections
                </InfluencerExtraInfoHeader>
              </InfluencerExtraInfoContainer>
            </div>
            <div>
              <InfluencerInfoDisplayProducts>
                {storeData?.profileSection?.products?.map((prod, index) => {
                  return (
                    <img
                      src={prod?.image}
                      onClick={() => window.open(prod?.url)}
                      alt="prodImg"
                      key={index}
                    />
                  );
                })}
              </InfluencerInfoDisplayProducts>
              <InfluencerExtraInfoHeader>
                {storeData?.profileSection?.products?.length}+ Products
              </InfluencerExtraInfoHeader>
            </div>
          </InfluencerInfoContainer>
        </div>
      )}
    </ThemeHighlightStoriesSection>
  );
};

export default ThemeHighlights;
