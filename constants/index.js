module.exports = {
    serverDefaultResponse: {
        status: 400,
        message: '',
        body: {}
    },
    productMessage: {
        PRODUCT_CREATED: 'Product Created Successfully',
        PRODUCT_FETCHED: 'Got All Products Successfully'
    },
    userMessage: {
        SIGNUP_SUCCESS : 'Signup Successfully',
        DUPLICATE_EMAIL: 'Duplicate Email',
        LOGIN_SUCCESS: 'Login Successfully',
        NO_EMAIL: 'No User Exists',
        WRONG_PASSWORD: 'Invalid Password',
    },
    middlewareMessage: {
        NO_TOKEN: 'No Token Found',
        INVALID_TOKEN: 'Invalid Token',
    }
}