const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    // console.log(authHeader)

    const token = authHeader && authHeader.split(' ')[1];
    // console.log(token)

    jwt.verify(token, process.env.ACCESS_TOKEN, (err, data) => {
        if (err) {
            res.setHeader('Content-Type', 'application/json');
            return res.status(403).send({ message: 'Unauthorized...', error: err });
        }

        next();
    });

    // refresh token
}

module.exports = auth;