import React from "react";
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from "./style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import imageLogo from "../../assets/images/image-sign-in.png";
import { Image } from "antd";
import { Navigate, useNavigate } from "react-router-dom";
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
import { useState } from "react";
import * as UserService from "../../services/UserService.js"
import { useMutationHooks } from "../../hooks/useMutationHook.js"
import Loading from "../../components/LoadingComponent/Loading"
import * as message from "../../components/Message/Message"
import { useEffect } from 'react';
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/slides/userSlide";

const SignInPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const mutation = useMutationHooks(
    data => UserService.loginUser(data),
  )
  
  console.log('mutation 111: ', mutation);
  const { data, isSuccess, isError, status } = mutation;

  useEffect(() => {
    console.log('Hahahaha: ', mutation);
    if (isSuccess && data.message === "Success") {
      navigate('/');
      // Khi login succes thì sẽ có data => cần lưu trữ data này
      console.log('data: ', data);
      localStorage.setItem('access_token', JSON.stringify(data?.access_token));
      if (data?.access_token) {
        const decoded = jwtDecode(data?.access_token);
        console.log('first: ', decoded);
        // decoded.payload là chứa id user và isAdmin
        if (decoded?.id) {
          handleGetDetailsUser(decoded?.id, data?.access_token);
        }
      }
    } 
  }, [isSuccess])

  const handleGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token);
    dispatch(updateUser({ ...res?.data, access_token: token }))
    console.log('res: ', res);
  }

  const handleOnchangeEmail = (value) => {
    setEmail(value);
  }

  const handleOnchangePassword = (value) => {
    setPassword(value)
  }

  const handleNavigateSignUp = () => {
    navigate("/sign-up");
  }

  const handleSignIn = () => {
    console.log('mutation: ', mutation);
    mutation.mutate({
      email,
      password
    })
    console.log(email, password);
  }

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
          <InputForm style={{ marginBottom: "10px"}} placeholder="abc@gmail.com" onChange={handleOnchangeEmail}/>
          <div style={{ position: 'relative' }}>
            <span
              onClick={() => setIsShowPassword(!isShowPassword)}
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '50%',
                right: '8px',
                transform: 'translateY(-50%)'
              }}
            >{
                isShowPassword ? (
                  <EyeFilled />
                ) : (
                  <EyeInvisibleFilled />
                )
              }
            </span>
            <InputForm
              value={password} onChange={handleOnchangePassword}
              placeholder="password"
              type={isShowPassword ? "text" : "password"}
            />
          </div>
         
         { data?.status === 'ERR' && <span style={{ color: "red"}}>{data?.message}</span>}
         <Loading isLoading={status === 'pending'}>
         <ButtonComponent
            disabled={!email.length || !password.length }
            onClick={handleSignIn}
            size={40}
            styleButton={{
              background: "rgb(255, 57, 69)",
              width: "100%",
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
         </Loading>
          
          <WrapperTextLight>Quên mật khẩu?</WrapperTextLight>
          <p>Chưa có tài khoản? <WrapperTextLight onClick={handleNavigateSignUp}>Tạo tài khoản</WrapperTextLight></p>
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
  );
};

export default SignInPage;
