import React from "react";
import Categories from "./Categories";
import { ThemeContainer } from "./components";
import ThemeHighlights from "./Highlights";
import Marketing from "./Marketing";

const Theme1 = () => {
  return (
    <ThemeContainer>
      <ThemeHighlights />
      <Marketing />
      <Categories />
    </ThemeContainer>
  );
};

export default Theme1;
