import React, { useEffect, useState } from "react";
import axios from "axios";
import PostSecond from "/Users/bhavyajain21/Desktop/affiliate-stores/studio/src/components/Post2/index.jsx";
import "./PostFeedComponent.scss";
function PostFeedComponent({ profileDetails }) {
  return (
    <div className="postwap--sectbody">
      <div className="container-width">
        <>
          <PostSecond
            profileDetails={profileDetails}
            onProfileClick={"/profileDetail?theme=dark"}
          />
        </>
      </div>
    </div>
  );
}

export default PostFeedComponent;
