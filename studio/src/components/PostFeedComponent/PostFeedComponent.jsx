import React, { useEffect, useState } from "react";
import axios from "axios";
import PostSecond from "/Users/bhavyajain21/Desktop/affiliate-stores/studio/src/components/Post2/index.jsx";
import "./PostFeedComponent.scss";
function PostFeedComponent() {
  const [homeData, setHomeData] = useState([]);
  const [componentSort, setComponentSort] = useState([]);

  const getHomeData = async () => {
    var config = {
      method: "get",
      url: "https://api.galleri5.co.in/servicer/galleri5/creator-zone/home",
      headers: {},
    };

    await axios(config)
      .then(function (response) {
        setHomeData(response.data);
        setComponentSort(response.data.map((val) => val.component));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getHomeData();
  }, []);

  const profile =
    (homeData &&
      homeData.length &&
      homeData?.filter((item) => item.name === "FEED_TIMELINE")[0]) ||
    {};

  const profileDetails = profile?.details?.meta[0]?.details;
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
