import React, { useState } from "react";
import { TabsSection, TabsContainer, TabItem } from "../components";
import Collections from "./Collections";
import Posts from "./Posts";
import "./index.css";

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
  return (
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
      {selectedTab === "posts" ? <Posts /> : <Collections />}
    </TabsSection>
  );
};

export default Categories;
