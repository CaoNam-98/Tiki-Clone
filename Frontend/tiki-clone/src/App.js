import React from 'react'
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import DefaultComponent from './components/DefaultComponent/DefaultComponent';
import { routes } from './routes'
import { Fragment } from 'react';
import axios from "axios"
import { useEffect } from "react"

function App() {

  // Thêm [] để gọi 1 lần
  useEffect(() => {
    fetchApi();
  }, [])

  const fetchApi = async () => {
    const res = await axios.get(`http://localhost:3001/api/product/get-all`)
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
