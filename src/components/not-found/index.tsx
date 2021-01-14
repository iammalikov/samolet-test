import React from "react";
import { Link } from "react-router-dom";
import { Result } from "antd";

type NotFoundProps = {
  title?: string;
  subTitle?: string;
};

const NotFound: React.FC<NotFoundProps> = ({
  title = "404",
  subTitle = "Страница не найдена",
}) => (
  <Result
    status="404"
    title={title}
    subTitle={subTitle}
    extra={<Link to="/">Перейти к списку регионов</Link>}
  />
);

export default NotFound;
