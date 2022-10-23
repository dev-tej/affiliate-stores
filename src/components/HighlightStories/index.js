import React, { useState } from "react";
import Stories from "react-insta-stories";

const HighlightStories = (props) => {
  const { highlights } = props;
  // const [currentId, setCurrentId] = useState(0);
  return (
    <div>
      <Stories
        // currentIndex={currentId}
        defaultInterval={5000}
        loop
        keyboardNavigation
        stories={highlights}
        width={"100%"}
        height={"375.26px"}
        // onStoryEnd={(s, st) => {
        //   setCurrentId((currentId) => currentId + 1);
        // }}
        // onAllStoriesEnd={(s, st) => {
        //   setCurrentId((currentId) => 0);
        // }}
        // onStoryStart={(s, st) => {
        //   setCurrentId((currentId) => currentId + 1 - 1);
        // }}
      />
    </div>
  );
};

export default HighlightStories;
