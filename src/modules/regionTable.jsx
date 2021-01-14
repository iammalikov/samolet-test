import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";
import { store } from "../core/store";
import ContentLoading from "../components/loading-alert";

const columns = [
  {
    title: "№",
    dataIndex: "order",
    key: "order",
    responsive: ["md"],
  },
  {
    title: "Регион",
    dataIndex: "territory",
    key: "territory",
    render: (_text, record) => {
      return <Link to={`/region/${record.order}`}>{record.territory}</Link>;
    },
  },
  {
    title: "Количество библиотек",
    dataIndex: "libraries",
    key: "libraries",
    align: "right",
    sorter: (a, b) => b.libraries - a.libraries,
  },
];

const RegionTable = () => {
  const { state } = useContext(store);
  const { regions, isLoadingRegions } = state;

  if (isLoadingRegions) {
    return <ContentLoading text="Получаем список регионов" />;
  }

  return (
    <Table
      columns={columns}
      dataSource={regions}
      rowKey={(record) => record.order}
    />
  );
};

export default RegionTable;
