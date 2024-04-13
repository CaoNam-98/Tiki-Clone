import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import {
  WrapperTypeProduct,
  WrapperButtonMore,
  WrapperProducts,
  WrapperContentProduct,
} from "./style";
import slider1 from "../../assets/images/slider1.webp";
import slider2 from "../../assets/images/slider2.webp";
import slider3 from "../../assets/images/slider3.webp";
import slider4 from "../../assets/images/slider4.webp";
import CardComponent from "../../components/CardComponent/CardComponent";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import { Row, Col } from "antd";

const HomePage = () => {
  const arr = ["TV", "Tủ lạnh", "Laptop"];
  return (
    <>
      <div
        style={{
          padding: "0",
          width: "1270px",
          maxWidth: "calc(100% - 48px)",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <WrapperTypeProduct>
          {arr.map((item) => {
            return <TypeProduct name={item} key={item} />;
          })}
        </WrapperTypeProduct>
      </div>
      <div style={{ background: "rgb(239, 239, 239)" }}>
        <WrapperContentProduct
          style={{
            backgroundColor: "#efefef",
            padding: "0px",
            width: "1270px",
            maxWidth: "clac(100% - 48px)",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div id="container" style={{ backgroundColor: "#efefef" }}>
            <SliderComponent arrImages={[slider1, slider2, slider3, slider4]} />
            {/* <NavbarComponent/> */}
          </div>
          <div style={{ backgroundColor: "#efefef", margin: "auto" }}>
            <WrapperProducts>
              <Row gutter={[20, 20]} >
                <Col span={4}>
                  <CardComponent />
                </Col>
                <Col span={4}>
                  <CardComponent />
                </Col>
                <Col span={4}>
                  <CardComponent />
                </Col>
                <Col span={4}>
                  <CardComponent />
                </Col>
                <Col span={4}>
                  <CardComponent />
                </Col>
                <Col span={4}>
                  <CardComponent />
                </Col>
                <Col span={4}>
                  <CardComponent />
                </Col>
                <Col span={4}>
                  <CardComponent />
                </Col>
              </Row>
            </WrapperProducts>
            <div
              style={{
                width: "100%",
                alignItems: "center",
                marginTop: "10px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <WrapperButtonMore
                textButton="Xem thêm"
                type="outline"
                styleButton={{
                  border: "1px solid rgb(11, 116, 229)",
                  color: "rgb(11, 116, 229)",
                  width: "240px",
                  height: "38px",
                  borderRadius: "4px",
                }}
                styleTextButton={{ fontWeight: 500 }}
              />
            </div>
          </div>
        </WrapperContentProduct>
      </div>
    </>
  );
};

export default HomePage;
