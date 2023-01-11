import React, { useState, useEffect } from "react";
import Loader from "components/Loader";
import { TabItem, TabsContainer, TabsSection } from "./Demo.components";
import Posts from "./Posts";
import Collections from "./Collections";
import { axiosInstance } from "AxiosInstance";

const TabsData = [
  {
    id: 0,
    title: "Posts",
  },
  {
    id: 1,
    title: "Collections",
  },
];

const Categories = () => {
  const [selectedTab, setSelectedTab] = useState("posts");
  const [loading, setLoading] = useState(false);
  const [feedData, setFeedData] = useState([]);
  const [collectionsData, setCollectionsData] = useState([]);

  useEffect(() => {
    if (selectedTab === "posts") {
      let fetchFeedData = async () => {
        setLoading(true);
        let result = await axiosInstance.get(
          `/galleri5/posts/galleri5_test/swagata_dev?page=1`
        );
        setFeedData(result?.data);
        setLoading(false);
      };
      fetchFeedData();
    } else if (selectedTab === "collections") {
      let fetchCollectionsData = async () => {
        setLoading(true);
        let result = await axiosInstance.get(
          `/galleri5/collections/galleri5_test/swagata_dev`
        );
        setCollectionsData(result?.data);
        setLoading(false);
      };
      fetchCollectionsData();
    }
  }, [selectedTab]);

  return loading ? (
    <Loader loading={loading} />
  ) : (
    <TabsSection>
      <TabsContainer>
        {TabsData?.map((tab, index) => {
          return (
            <TabItem
              key={index}
              selected={tab?.title?.toLowerCase() === selectedTab}
              onClick={() => setSelectedTab(tab?.title?.toLowerCase())}
            >
              {tab?.title}
            </TabItem>
          );
        })}
      </TabsContainer>
      {selectedTab === "posts" ? (
        <Posts data={feedData} />
      ) : (
        <Collections data={collectionsData} />
      )}
    </TabsSection>
  );
};

export default Categories;
