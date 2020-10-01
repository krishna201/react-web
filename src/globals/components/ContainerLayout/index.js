import React from "react";
import { Card } from "antd";
import "./index.scss";
// Main container for all page
const ContainerLayout = ({ children }) => {
  return <Card className="main-container">{children}</Card>;
};

export default ContainerLayout;
