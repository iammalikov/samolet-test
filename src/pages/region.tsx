import React from "react";
import { useParams } from "react-router-dom";
import { Typography } from "antd";
import AboutRegion from "../modules/aboutRegion";
import Container from "../components/container";

type ParamTypes = {
  order: string;
};

const { Title } = Typography;

const Region: React.FC = () => {
  const { order } = useParams<ParamTypes>();

  return (
    <Container>
      <Title level={2}>Информация о&nbsp;библиотеках в&nbsp;регионе</Title>
      <AboutRegion regionOrder={order} />
    </Container>
  );
};

export default Region;
