import React from "react";
import {
  HeaderInfoContainer,
  InfluencerInfoContainer,
  InfluencerInfoSection,
  InfluencerDp,
  InfluencerDataSection,
  InfluencerName,
  InfluencerUsername,
  ShareLogo,
  MetaSection,
} from "./components";
import Share from "../../assets/LandingPage/Share.svg";

const HeaderInfo = () => {
  return (
    <HeaderInfoContainer>
      <InfluencerInfoContainer>
        <InfluencerInfoSection>
          <div>
            <InfluencerDp
              src="https://gallerify.s3-us-west-2.amazonaws.com/ipics/aashnashroff.jpg"
              alt="influencerLogo"
            />
          </div>
          <InfluencerDataSection>
            <InfluencerName>Aashna Shroff</InfluencerName>
            <InfluencerUsername>@aashnashroff</InfluencerUsername>
          </InfluencerDataSection>
        </InfluencerInfoSection>
        <div>
          <ShareLogo src={Share} alt="shareLogo" />
        </div>
      </InfluencerInfoContainer>
      <MetaSection>
        <h1>
          Check out Aashna Shroff's top pic for{" "}
          <span>Myntra's Beauty Sale !</span>
        </h1>
      </MetaSection>
    </HeaderInfoContainer>
  );
};

export default HeaderInfo;
