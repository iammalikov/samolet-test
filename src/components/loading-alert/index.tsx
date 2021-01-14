import React from "react";
import { Result, Spin, Typography } from "antd";

type ContentLoadingProps = {
  text: string;
};

const { Text } = Typography;

const ContentLoading: React.FC<ContentLoadingProps> = ({ text }) => (
  <Result
    icon={<Spin size="large" />}
    subTitle={<Text disabled>{text}</Text>}
  />
);

export default ContentLoading;
