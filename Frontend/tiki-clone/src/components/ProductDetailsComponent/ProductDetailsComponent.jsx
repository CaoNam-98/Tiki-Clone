import React from "react";
import { Row, Col, Image } from "antd";
import imageProduct from "../../assets/images/image-large.jpg";
import imageSmall from "../../assets/images/image-small.jpg";
import {
  WrapperStyleImageSmall,
  WrapperStyleColImage,
  WrapperStyleNameProduct,
  WrapperStyleTextSell,
  WrapperPriceProduct,
  WrapperPriceTextProduct,
  WrapperAddressProduct,
  WrapperQualityProduct,
  WrapperInputNumber,
  WrapperBtnQualityProduct,
} from "./style";
import { StarFilled, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { InputNumber } from "antd";

const ProductDetailsComponent = () => {
  const onChange = (value) => {
    console.log("changed", value);
  };

  return (
    <Row style={{ padding: "16px", background: "#fff", borderRadius: "4px" }}>
      <Col span={10} style={{ borderRight: "1px solid #e5e5e5", paddingRight: '8px'}}>
        <Image src={imageProduct} alt="image-product" preview="false" />
        <div>
          <Row style={{ paddingTop: "10px", justifyContent: "space-between" }}>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall
                src={imageSmall}
                alt="image-product"
                preview={false}
              />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall
                src={imageSmall}
                alt="image-product"
                preview={false}
              />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall
                src={imageSmall}
                alt="image-product"
                preview={false}
              />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall
                src={imageSmall}
                alt="image-product"
                preview={false}
              />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall
                src={imageSmall}
                alt="image-product"
                preview={false}
              />
            </WrapperStyleColImage>
            <WrapperStyleColImage span={4}>
              <WrapperStyleImageSmall
                src={imageSmall}
                alt="image-product"
                preview={false}
              />
            </WrapperStyleColImage>
          </Row>
        </div>
      </Col>
      <Col span={14} style={{ paddingLeft: "10px"}}>
        <WrapperStyleNameProduct>
          Sách - Thám tử lừng danh conan
        </WrapperStyleNameProduct>
        <div>
          <StarFilled
            style={{ fontSize: "12px", color: "rgb(253, 216, 54)" }}
          />
          <StarFilled
            style={{ fontSize: "12px", color: "rgb(253, 216, 54)" }}
          />
          <StarFilled
            style={{ fontSize: "12px", color: "rgb(253, 216, 54)" }}
          />
          <WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>
        </div>
        <WrapperPriceProduct>
          <WrapperPriceTextProduct>200.000</WrapperPriceTextProduct>
        </WrapperPriceProduct>
        <WrapperAddressProduct>
          <span>Giao đến </span>
          <span className="address">Q. 1, P. Bến Nghé, Hồ Chí Minh</span> -
          <span className="change-address"> Đổi địa chỉ</span>
        </WrapperAddressProduct>
        <div style={{ margin: "10px 0 20px", padding: "10px 0", borderTop: "1px solid #e5e5e5", borderBottom: "1px solid #e5e5e5"  }}>
          <span style={{ marginBottom: "10px"}}>Số lượng</span>
          <WrapperQualityProduct>
            <button style={{ border: "none", background: "transparent" }}>
              <MinusOutlined style={{ color: "#000", fontSize: "20px" }} />
            </button>

            <WrapperInputNumber
              defaultValue={3}
              onChange={onChange}
              size="small"
            />
            <button style={{ border: "none", background: "transparent" }}>
              <PlusOutlined style={{ color: "#000", fontSize: "20px" }} />
            </button>
          </WrapperQualityProduct>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px'}}>
          <ButtonComponent
            size={40}
            styleButton={{ background: "rgb(255, 57, 69)", width: "220px", height: "48px", border: 'none', borderRadius: '4px' }}
            textButton={"Chọn mua"}
            styleTextButton={{ color: "#fff", fontSize: "15px", fontWeight: "700"  }}
          ></ButtonComponent>
          <ButtonComponent
            size={40}
            styleButton={{ background: "#fff", width: "220px", height: "48px", border: '1px solid rgb(13, 92, 182)', borderRadius: '4px' }}
            textButton={"Mua trả sau"}
            styleTextButton={{ color: "rgb(13, 92, 182)", fontSize: "15px", fontWeight: "700" }}
          ></ButtonComponent>
        </div>
      </Col>
    </Row>
  );
};

export default ProductDetailsComponent;
