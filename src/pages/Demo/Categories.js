import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
  const { brand, slug, username } = useParams();

  const [selectedTab, setSelectedTab] = useState("posts");
  const [loading, setLoading] = useState(false);
  const [feedData, setFeedData] = useState([]);
  const [collectionsData, setCollectionsData] = useState([]);

  useEffect(() => {
    if (selectedTab === "posts") {
      let fetchFeedData = async () => {
        setLoading(true);
        let result = await axiosInstance.get(
          `/${brand}/posts/${slug}/${username}?page=1`
        );
        setFeedData(result?.data);
        setLoading(false);
      };
      fetchFeedData();
    } else if (selectedTab === "collections") {
      let fetchCollectionsData = async () => {
        setLoading(true);
        let result = await axiosInstance.get(
          `/${brand}/collections/${slug}/${username}`
        );
        setCollectionsData(result?.data);
        setLoading(false);
      };
      fetchCollectionsData();
    }
  }, [selectedTab, brand, slug, username]);

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
