import axios from "axios";

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
