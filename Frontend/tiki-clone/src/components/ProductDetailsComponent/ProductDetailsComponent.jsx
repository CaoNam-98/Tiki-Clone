import React from "react";
import { Row, Col, Image } from "antd";
import imageProduct from "../../assets/images/image-large.jpg";
import imageSmall from "../../assets/images/image-small.jpg";
import { WrapperStyleImageSmall, WrapperStyleColImage } from "./style";

const ProductDetailsComponent = () => {
  return (
    <Row style={{ padding: "16px", background: "#fff" }}>
      <Col span={10}>
        <Image src={imageProduct} alt="image-product" preview="false" />
        <div>
          <Row style={{ paddingTop: "10px", justifyContent: "space-between"}}>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall src={imageSmall} alt="image-product" preview={false}  />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall src={imageSmall} alt="image-product" preview={false}  />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall src={imageSmall} alt="image-product" preview={false}  />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall src={imageSmall} alt="image-product" preview={false}  />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall src={imageSmall} alt="image-product" preview={false}  />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall src={imageSmall} alt="image-product" preview={false}  />
            </WrapperStyleColImage>
          </Row>
        </div>
      </Col>
      <Col span={14}>14</Col>
    </Row>
  );
};

export default ProductDetailsComponent;
