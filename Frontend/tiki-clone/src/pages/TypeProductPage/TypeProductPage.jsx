import React, { Fragment } from "react";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Row, Col } from "antd";
import { WrapperProducts, WrapperNavbar } from "./style";
import { Pagination } from "antd";

const TypeProductPage = () => {
  const onChange = (page) => {};

  return (
    <div style={{ padding: "0 120px", background: "#efefef" }}>
      <Row
        style={{
          flexWrap: "nowrap",
          paddingTop: "10px",
        }}
      >
        <WrapperNavbar span={4}>
          <NavbarComponent />
        </WrapperNavbar>
        <Col span={20}>
          <WrapperProducts>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </WrapperProducts>
          <Pagination size="small" total={50} showSizeChanger showQuickJumper style={{ textAlign: "center", marginTop: "10px"}}/>
        </Col>
      </Row>
    </div>
  );
};

export default TypeProductPage;
