const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const { genneralAccessToken, genneralRefreshToken } = require("./JwtService");

const createUser = (newUser) => {
  return new Promise(async (resolve, reject) => {
    const { name, email, password, confirmPassword, phone } = newUser;
    try {
      // Check email exist
      const checkUser = await User.findOne({
        email: email,
      });
      if (checkUser !== null) {
        resolve({
          status: "OK",
          message: "The email is already",
        });
      }
      // Mã hoá password
      const hash = bcrypt.hashSync(password, 10);
      // Trường hợp khác thì insert
      const createdUser = await User.create({
        name,
        email,
        password: hash,
        phone,
      });
      if (createdUser) {
        resolve({
          status: "OK",
          message: "Success",
          data: createdUser,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

const loginUser = (userLogin) => {
  return new Promise(async (resolve, reject) => {
    const { name, email, password, confirmPassword, phone } = userLogin;
    try {
      // Check email exist
      const checkUser = await User.findOne({
        email: email,
      });
      if (checkUser === null) {
        resolve({
          status: "OK",
          message: "The user is not defined",
        });
      }

      const comparePassword = bcrypt.compareSync(password, checkUser.password);

      if (!comparePassword) {
        resolve({
          status: "OK",
          message: "The password or user is incorrect",
        });
      }

      const access_token = await genneralAccessToken({
        id: checkUser.id,
        isAdmin: checkUser.isAdmin,
      });

      // refreshToken dùng khi access_token hết hạn thì sẽ cấp lại 1 access_token mới nhờ refresh_token cấp lại cho access_token mới
      const refresh_token = await genneralRefreshToken({
        id: checkUser.id,
        isAdmin: checkUser.isAdmin,
      });

      resolve({
        status: "OK",
        message: "Success",
        access_token,
        refresh_token,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const updateUser = (id, data) => {
    console.log('gggg: ', id, data);
  return new Promise(async (resolve, reject) => {
    try {
      const checkUser = await User.findOne({id: id});
      console.log('checkUser: ', checkUser);
      if (checkUser === null) {
        resolve({
          status: "OK",
          message: "The user is not defined",
        });
      }
    //   mặc dù đã BD update nhưng khi console.log() vẫn ra data lúc chưa update => thêm { new: true } để get data mới nhất 
      const updateUser = await User.findByIdAndUpdate(id, data, { new: true });
      console.log('updateUser: ', updateUser);
      resolve({
        status: "OK",
        message: "SUCCESS",
        data: updateUser
      })
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createUser,
  loginUser,
  updateUser,
};
