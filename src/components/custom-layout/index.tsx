import React from "react";
import { Layout } from "antd";

type LayoutProps = {
  children: React.ReactNode;
};

const CustomLayout: React.FC<LayoutProps> = ({ children }) => (
  <Layout style={{ minHeight: "100%" }}>{children}</Layout>
);

export default CustomLayout;
