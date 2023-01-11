import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Categories from "./Categories";
import HighlightSection from "./HighlightSection";
import SideBar from "components/SideBar";
import "./index.css";
import { axiosInstance } from "AxiosInstance";
import Loader from "components/Loader";

const DemoPurpose = () => {
  const { brand, slug, username } = useParams();

  const [userStoreData, setUserStoreData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let fetchUserStoreData = async () => {
      setLoading(true);
      let result = await axiosInstance.get(
        `/${brand}/store/${slug}/${username}`
      );
      setUserStoreData(result?.data);
      setLoading(false);
    };
    fetchUserStoreData();
  }, [brand, slug, username]);

  return loading ? (
    <Loader loading={loading} />
  ) : (
    <div id="demoContainer">
      <HighlightSection data={userStoreData} />
      <Categories />
      <SideBar />
    </div>
  );
};

export default DemoPurpose;
