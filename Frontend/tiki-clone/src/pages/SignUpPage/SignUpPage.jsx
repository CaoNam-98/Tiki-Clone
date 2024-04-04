import React from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from "./style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import imageLogo from "../../assets/images/image-sign-in.png";
import { Image } from "antd";

const SignUpPage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0, 0, 0, 0.53)",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "800px",
          height: "445px",
          borderRadius: "6px",
          backgroundColor: "#fff",
          display: "flex",
        }}
      >
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p>Đăng nhập vào tài khoản</p>
          <InputForm style={{ marginBottom: "10px"}} placeholder="abc@gmail.com"/>
          <InputForm placeholder="password" style={{ marginBottom: "10px"}}/>
          <InputForm placeholder="confirm password" />
          <ButtonComponent
            size={40}
            styleButton={{
              background: "rgb(255, 57, 69)",
              width: "220px",
              height: "48px",
              border: "none",
              borderRadius: "4px",
              margin: "26px 0 10px"
            }}
            textButton={"Đăng Nhập"}
            styleTextButton={{
              color: "#fff",
              fontSize: "15px",
              fontWeight: "700",
            }}
          ></ButtonComponent>
          <WrapperTextLight>Quên mật khẩu?</WrapperTextLight>
          <p>Bạn đã có tài khoản? <WrapperTextLight>Đăng nhập</WrapperTextLight></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image
            src={imageLogo}
            preview={false}
            alt="image-logo"
            height="203px"
            width="203px"
          />
          <h4>Mua sắm tại Tiki</h4>
        </WrapperContainerRight>
      </div>
    </div>
  )
}

export default SignUpPage