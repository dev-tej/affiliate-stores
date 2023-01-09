import React, { useState, useEffect, createContext } from "react";
import { useParams } from "react-router-dom";
import Categories from "./Categories";
import { ThemeContainer } from "./components";
import ThemeHighlights from "./Highlights";
import Marketing from "./Marketing";
import { axiosInstance } from "../../AxiosInstance";
import Loader from "../../components/Loader";

export const UserStoreData = createContext();
const Theme1 = () => {
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
    <UserStoreData.Provider value={userStoreData}>
      <ThemeContainer>
        <ThemeHighlights />
        <Marketing />
        <Categories />
      </ThemeContainer>
    </UserStoreData.Provider>
  );
};

export default Theme1;
