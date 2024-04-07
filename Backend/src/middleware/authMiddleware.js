const jwt = require("jsonwebtoken")
const dotenv = require('dotenv')
dotenv.config()

const authMiddleWare = (req, res, next) => {
    console.log('checkToken: ', req.headers.token);
    const token = req.headers.token.split(' ')[1];
    console.log('token: ', token);
    console.log('hhhh: ', process.env.ACCESS_TOKEN);
    jwt.verify(token, process.env.ACCESS_TOKEN, function(err, user) {
        console.log('Nam Cao: ', user);
        console.log('1111: ', err);
        if (err) {
            return res.status(404).json({
                message: 'The authentication',
                status: "ERROR"
            })
        }
        const { payload } = user;
        console.log('payload: ', payload);
        if (payload?.isAdmin) {
            next();
        } else {
            return res.status(404).json({
                message: 'The authentication',
                status: "ERROR"
            })
        }
      });
}

const authUserMiddleWare = (req, res, next) => {
    const token = req.headers.token.split(' ')[1];
    const userId = req.params.id;
    console.log('hihihii: ', token, process.env.ACCESS_TOKEN);
    jwt.verify(token, process.env.ACCESS_TOKEN, function(err, user) {
        console.log('Nam Cao: ', user);
        console.log('1111: ', err);
        if (err) {
            return res.status(404).json({
                message: 'The authentication',
                status: "ERROR"
            })
        }
        const { payload } = user;
        console.log('payload: ', payload);
        if (payload?.isAdmin || payload?.id === userId) {
            next();
        } else {
            return res.status(404).json({
                message: 'The authentication',
                status: "ERROR"
            })
        }
      });
}

module.exports = {
    authMiddleWare,
    authUserMiddleWare,
}

