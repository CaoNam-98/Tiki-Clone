import React from "react";
import { Col, Input, Space } from "antd";
import {
  WrapperHeader,
  WrapperTextHeader,
  WrapperHeaderAccount,
  WrapperHeaderCart,
  WrapperTextHeaderSmall,
  WrapperCartNumber,
} from "./style";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const HeaderComponent = () => {
  const { Search } = Input;

  return (
    <div>
      <WrapperHeader gutter={16}>
        <Col span={6}>
          <WrapperTextHeader>TiKi</WrapperTextHeader>
        </Col>
        <Col span={12}>
          <ButtonInputSearch
            size="large"
            bordered={false}
            placeholder="Tìm kiếm sản phẩm"
            textButton="Tìm kiếm"
          ></ButtonInputSearch>
          
        </Col>
        <Col
          span={6}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <WrapperHeaderAccount>
            <UserOutlined style={{ fontSize: "30px" }} />
            <div>
              <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccount>
          <WrapperHeaderCart>
            <div style={{ display: "flex", alignItems: "flex-end" }}>
              <div style={{ position: "relative" }}>
                <ShoppingCartOutlined style={{ fontSize: "30px" }} />
                <WrapperCartNumber>3</WrapperCartNumber>
              </div>
              <WrapperTextHeaderSmall>Giỏ Hàng</WrapperTextHeaderSmall>
            </div>
          </WrapperHeaderCart>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
