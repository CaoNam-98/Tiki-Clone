const jwt = require("jsonwebtoken")
const dotenv = require('dotenv')
dotenv.config()

const authMiddleWare = (req, res, next) => {
    console.log('req.header: ', req.headers);
    const token = req.headers.token.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN, function(err, user) {
        if (err) {
            return res.status(404).json({
                message: 'The authentication',
                status: "ERROR"
            })
        }
        const { payload } = user;
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
    // const userId = req.params.id;
    jwt.verify(token, process.env.ACCESS_TOKEN, function(err, user) {
        if (err) {
            return res.status(404).json({
                message: 'The authentication',
                status: "ERROR"
            })
        }
        console.log('user', user);
        // const { payload } = user;
        if (user?.isAdmin) {
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

