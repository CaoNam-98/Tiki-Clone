import axios from "axios";

export const axiosJWT = axios.create()

export const loginUser = async (data) => {
  const config = {
    headers: { "content-type": "application/x-www-form-urlencoded" },
  };
  const res = await axios.post(
    `${process.env.REACT_APP_API_URL}/user/sign-in`,
    data,
    config
  );
  return res.data;
};

export const signupUser = async (data) => {
  const config = {
    headers: { "content-type": "application/x-www-form-urlencoded" },
  };
  const res = await axios.post(
    `${process.env.REACT_APP_API_URL}/user/sign-up`,
    data,
    config
  );
  return res.data;
};

export const getDetailsUser = async(id, access_token) => {
  const res = await axiosJWT.get(
    `${process.env.REACT_APP_API_URL}/user/get-details/${id}`, {
      headers: {
        token: `Bearer ${access_token}`,
      }
    }
  );
  return res.data;
}

export const refreshToken = async() => {
  const res = await axios.post(
    `${process.env.REACT_APP_API_URL}/user/refresh-token`, {
      // khi có cookie sẽ tự động lấy cookie truyền xuống BE
      withCredentials: true
    }
  );
  return res.data;
}

export const logoutUser = async() => {
  const res = await axios.post(
    `${process.env.REACT_APP_API_URL}/user/log-out`);
  return res.data;
}

export const updateUser = async (id, data, access_token) => {
  const res = await axiosJWT.put(`${process.env.REACT_APP_API_URL}/user/update-user/${id}`, data, {
      headers: {
          token: `Bearer ${access_token}`,
      }
  })
  return res.data
}

