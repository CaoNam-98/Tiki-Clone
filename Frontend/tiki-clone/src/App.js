import React, { useEffect } from 'react'
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import DefaultComponent from './components/DefaultComponent/DefaultComponent';
import { routes } from './routes'
import { Fragment } from 'react';
import axios from "axios"
import {isJsonString} from "../src/untils"
import { jwtDecode } from "jwt-decode";
import * as UserService from "../src/services/UserService.js"
import { useDispatch } from "react-redux";
import { updateUser } from "../src/redux/slides/userSlide";

function App() {
  const dispatch = useDispatch();

  // Thêm [] để gọi 1 lần
  useEffect(() => {
    let { storageData, decoded} = handleDecoded();
    if (decoded?.id) {
      handleGetDetailsUser(decoded?.id, storageData);
    }
  }, [])

  const handleDecoded = () => {
    let storageData = localStorage.getItem('access_token');
    let decoded = {}
    if (storageData && isJsonString(storageData)) {
      storageData = JSON.parse(storageData);
      decoded = jwtDecode(storageData);
    }
    return {decoded, storageData};
  }

  // nếu access_token hết hạn thì sẽ gọi đến refresh_token mới và đặt vào config
  // UserService.axiosJWT gọi đến api trước khi get details
  UserService.axiosJWT.interceptors.request.use(async (config) => {
    const currentTime = new Date();
    let { storageData, decoded} = handleDecoded();
    if (decoded?.exp < currentTime.getTime() / 1000) {
      const data = await UserService.refreshToken();
      config.headers['token'] = `Bearer ${data?.access_token}`
    }
    return config;
  }, (err) => {
    return Promise.reject(err);
  });

  const handleGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token);
    dispatch(updateUser({ ...res?.data, access_token: token }))
    console.log('res: ', res);
  }

  return (

    <div>
      <Router>
        <Routes>
          {routes.map((route, index) => {
            const Page = route.page
            const Layout = route.isShowHeader ? DefaultComponent : Fragment
            return (
              <Route key={index} path={ route.path } element={
                <Layout>
                  <Page />
                </Layout>
              } />
            )
          })}
         
        </Routes>
      </Router>
    </div>
  )
}

export default App;
