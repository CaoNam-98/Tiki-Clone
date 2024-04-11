import React from "react";
import { Row, Col, Input, Badge } from "antd";
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
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const HeaderComponent = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  console.log('user: ', user);
  const { Search } = Input;

  const handleNavigateLogin = () => {
    navigate("/sign-in");
  }

  return (
    <div>
      <WrapperHeader>
        <Col span={5}>
          <WrapperTextHeader>TiKi</WrapperTextHeader>
        </Col>
        <Col span={11}>
          <ButtonInputSearch
            size="large"
            bordered={false}
            placeholder="Tìm kiếm sản phẩm"
            textButton="Tìm kiếm"
          ></ButtonInputSearch>
        </Col>
        <Col
          span={8}
          style={{
            display: "flex",
            gap: "54px",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Row style={{ alignItems: "center", width: "100%" }}>
            <Col
              span={14}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <WrapperHeaderAccount>
                <UserOutlined style={{ fontSize: "30px" }} />
                { user?.name ? (
                  <div style={{ cursor: "pointer"}}>{ user?.name}</div>
                ) : (
                  <div onClick={handleNavigateLogin} style={{ cursor: "pointer"}}>
                  <WrapperTextHeaderSmall>
                    Đăng nhập/Đăng ký
                  </WrapperTextHeaderSmall>
                  <div style={{ display: "flex", alignItems: "center"}}>
                    <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                    <CaretDownOutlined />
                  </div>
                </div>
                )}
                
              </WrapperHeaderAccount>
            </Col>
            <Col span={10}>
              <div style={{ display: "flex", justifyContent: "flex-end"}}>
                <div style={{ position: "relative" }}>
                  <Badge count={5} size="small">
                    <ShoppingCartOutlined
                      style={{ fontSize: "30px", color: "#fff" }}
                    />
                  </Badge>
                </div>

                <WrapperTextHeaderSmall>
                  <div>
                  <span>Giỏ Hàng</span>
                  </div>
                 
                </WrapperTextHeaderSmall>
              </div>
            </Col>
          </Row>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
