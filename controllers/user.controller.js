const User = require('../database/models/user.model')
const constant = require('../constants');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports.signup = async (req, res) => {
    let response = { ...constant.serverDefaultResponse }
    try {
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            throw new Error(constant.userMessage.DUPLICATE_EMAIL)
        }
        else {
            req.body.password = await bcrypt.hash(req.body.password, 12);
            console.log(req.body.password)
            let userData = new User(req.body);
            await userData.save();
            response.body = userData;
            response.status = 200;
            response.message = constant.userMessage.SIGNUP_SUCCESS;
            res.send(response);
        }

    }
    catch (err) {
        console.log(err);
        response.message = err.message;
    }
}

module.exports.login = async (req, res) => {
    let response = { ...constant.serverDefaultResponse }
    try {
        let user = await User.findOne({ email: req.body.email })
        if (!user) {
            throw new Error(constant.userMessage.NO_EMAIL)
        }
        else {

            const isValid = bcrypt.compare(req.body.password, user.password);
            if (!isValid) {
                throw new Error(constant.userMessage.WRONG_PASSWORD)
            }
            else {
                const token = await jwt.sign({ email: user.email }, process.env.SECRET_KEY, { expiresIn: '1d' });
                response.body = token;
                response.status = 200;
                response.message = constant.userMessage.LOGIN_SUCCESS;
                res.send(response);

            }
        }

    }
    catch (err) {
        console.log(err);
        response.message = err.message;
    }


}