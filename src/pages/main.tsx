import React from "react";
import { Typography } from "antd";
import Container from "../components/container";
import RegionTable from "../modules/regionTable";

const { Title } = Typography;

const Main: React.FC = () => (
  <Container>
    <Title level={2}>Список регионов</Title>
    <RegionTable />
  </Container>
);

export default Main;
