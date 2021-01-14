import React from "react";
import { Typography, List } from "antd";
import styles from "./styles.module.css";

type DepartmentInfoProps = {
  info: Array<{ title: string; description: string }>;
};

const { Text, Title } = Typography;

const DepartmentInfo: React.FC<DepartmentInfoProps> = ({ info }) => (
  <div className={styles.departmentInfo}>
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 1,
        md: 2,
        lg: 2,
        xl: 2,
        xxl: 2,
      }}
      dataSource={info}
      renderItem={(item) => (
        <List.Item>
          <Title level={4}>{item.title}</Title>
          <Text>{item.description}</Text>
        </List.Item>
      )}
    />
  </div>
);

export default DepartmentInfo;
