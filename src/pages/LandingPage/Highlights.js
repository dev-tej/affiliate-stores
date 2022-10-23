import React from "react";
import {
  ProductionHighlightStories,
  DevelopmentHighlightStories,
} from "../../components/HighlightStories";
import { HighlightStoriesSection, HighlightStoryContainer } from "./components";

const HIGHLIGHTS_STORIES = [
  {
    content: () => {
      return (
        <HighlightStoryContainer>
          <img
            src="https://gallerify.s3-us-west-2.amazonaws.com/instaphosts/17923443460871228.jpg"
            alt="img"
          />
        </HighlightStoryContainer>
      );
    },
  },
  {
    content: () => {
      return (
        <HighlightStoryContainer>
          <img
            src="https://gallerify.s3-us-west-2.amazonaws.com/instaphosts/18046848607307716.jpg"
            alt="img"
          />
        </HighlightStoryContainer>
      );
    },
  },
  {
    content: () => {
      return (
        <HighlightStoryContainer>
          <img
            src="https://gallerify.s3-us-west-2.amazonaws.com/instaphosts/17887530464516933.jpg"
            alt="img"
          />
        </HighlightStoryContainer>
      );
    },
  },
];

const Highlights = () => {
  return (
    <HighlightStoriesSection>
      {!process.env.NODE_ENV || process.env.NODE_ENV === "development" ? (
        <DevelopmentHighlightStories highlights={HIGHLIGHTS_STORIES} />
      ) : (
        <ProductionHighlightStories highlights={HIGHLIGHTS_STORIES} />
      )}
    </HighlightStoriesSection>
  );
};

export default Highlights;
