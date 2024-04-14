import React, { useState } from "react";
import { Row, Col, Input, Badge } from "antd";
import { Button, ConfigProvider, Popover, Segmented } from "antd";
import {
  WrapperHeader,
  WrapperTextHeader,
  WrapperHeaderAccount,
  WrapperHeaderCart,
  WrapperTextHeaderSmall,
  WrapperCartNumber,
  WrapperContentPopup,
} from "./style";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import * as UserService from "../../services/UserService.js";
import { useDispatch } from "react-redux";
import { resetUser } from "../../redux/slides/userSlide";
import Loading from "../LoadingComponent/Loading";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const { Search } = Input;

  const handleNavigateLogin = () => {
    navigate("/sign-in");
  };

  const handleLogout = async () => {
    setLoading(true);
    await UserService.logoutUser();
    dispatch(resetUser());
    setLoading(false);
  };

  const content = (
    <div>
      <WrapperContentPopup onClick={handleLogout}>
        Đăng xuất
      </WrapperContentPopup>
      <WrapperContentPopup onClick={() => navigate("/profile-user")}>
        Thông tin người dùng
      </WrapperContentPopup>
    </div>
  );

  return (
    <div style={{ width: "100%", background: "rgb(26, 148, 255)" }}>
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
              <Loading isLoading={loading}>
                <WrapperHeaderAccount>
                  <UserOutlined style={{ fontSize: "30px" }} />
                  {user?.access_token ? (
                    <>
                      <Popover content={content} trigger="click">
                        <div style={{ cursor: "pointer" }}>{user?.name.length ? user?.name : user?.email }</div>
                      </Popover>
                    </>
                  ) : (
                    <div
                      onClick={handleNavigateLogin}
                      style={{ cursor: "pointer" }}
                    >
                      <WrapperTextHeaderSmall>
                        Đăng nhập/Đăng ký
                      </WrapperTextHeaderSmall>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <WrapperTextHeaderSmall>
                          Tài khoản
                        </WrapperTextHeaderSmall>
                        <CaretDownOutlined />
                      </div>
                    </div>
                  )}
                </WrapperHeaderAccount>
              </Loading>
            </Col>
            <Col span={10}>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
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
