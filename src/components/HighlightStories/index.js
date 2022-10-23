import React, { useState } from "react";
import Stories from "react-insta-stories";

export const ProductionHighlightStories = (props) => {
  const { highlights } = props;
  return (
    <div>
      <Stories
        defaultInterval={5000}
        loop
        keyboardNavigation
        stories={highlights}
        width={"100%"}
        height={"375.26px"}
      />
    </div>
  );
};

export const DevelopmentHighlightStories = (props) => {
  const { highlights } = props;
  const [currentId, setCurrentId] = useState(0);
  return (
    <div>
      <Stories
        currentIndex={currentId}
        defaultInterval={5000}
        loop
        keyboardNavigation
        stories={highlights}
        width={"100%"}
        height={"375.26px"}
        onStoryEnd={(s, st) => {
          setCurrentId((currentId) => currentId + 1);
        }}
        onAllStoriesEnd={(s, st) => {
          setCurrentId((currentId) => 0);
        }}
        onStoryStart={(s, st) => {
          setCurrentId((currentId) => currentId + 1 - 1);
        }}
      />
    </div>
  );
};
