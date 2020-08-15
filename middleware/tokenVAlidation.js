const constant = require('../constants');
const jwt = require('jsonwebtoken');

module.exports.tokenValidation = (req, res, next) => {
    let response = { ...constant.serverDefaultResponse }

    try {
        if (!req.headers.authorization) {
            throw new Error(constant.middlewareMessage.NO_TOKEN)
        }
        else {
            const decoded = jwt.verify(req.headers.authorization.split('Bearer')[1].trim(), process.env.SECRET_KEY);
            console.log(decoded);
            return next();
        }
    }
    catch (err) {
        console.log(err);
        response.message = err.message;
        response.status = 401;
    }

    return res.status(response.status).send(response);

}