import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import { store } from "../core/store";
import { regionPropDict } from "../core/dictionaries";
import ContentLoading from "../components/loading-alert";
import NotFound from "../components/not-found";
import DepartmentInfo from "../components/department-info";
import ExtendedDepartmentInfo from "../components/extended-department-info";

type AboutRegionProps = {
  regionOrder: string;
};

const AboutRegion: React.FC<AboutRegionProps> = ({ regionOrder }) => {
  const { state } = useContext(store);
  const { regions, isLoadingRegions } = state;
  const currentRegion =
    regions !== null
      ? regions.find((region) => region.order === Number(regionOrder))
      : null;

  if (isLoadingRegions) {
    return <ContentLoading text="Получаем информацию о&nbsp;регионе" />;
  }

  if (currentRegion === undefined || currentRegion === null) {
    return (
      <NotFound
        title="Ошибка"
        subTitle="Запрошенный Вами регион не&nbsp;найден"
      />
    );
  }

  const departmentInfo = [
    {
      title: regionPropDict["fullname"],
      description: currentRegion.fullname,
    },
    {
      title: regionPropDict["address"],
      description: currentRegion.address,
    },
  ];

  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Список регионов</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{currentRegion.territory}</Breadcrumb.Item>
      </Breadcrumb>
      <DepartmentInfo info={departmentInfo} />
      <ExtendedDepartmentInfo region={currentRegion} />
    </>
  );
};

export default AboutRegion;
