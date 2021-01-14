import React from "react";
import { Statistic, Row, Col } from "antd";
import { regionPropDict } from "core/dictionaries";
// import { RegionType } from "core/types";
import styles from "./styles.module.css";

// type ExtendedDepartmentInfoProps = {
//   region: RegionType;
// };

const ExtendedDepartmentInfo = ({ region }) => {
  const availableRegionProp = Object.keys(regionPropDict);

  return (
    <div className={styles.extendedDepartmentInfo}>
      <Row gutter={[8, 16]}>
        {availableRegionProp.map((key) => {
          if (
            key !== "order" &&
            key !== "fullname" &&
            key !== "territory" &&
            key !== "address" &&
            regionPropDict[key] !== ""
          ) {
            return (
              <Col xs={24} md={12} key={key}>
                <Statistic
                  title={regionPropDict[key]}
                  value={region[key]}
                  formatter={(value) => value}
                />
              </Col>
            );
          }
        })}
      </Row>
    </div>
  );
};

export default ExtendedDepartmentInfo;
