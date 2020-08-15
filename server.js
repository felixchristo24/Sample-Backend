const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const dbConnect = require('./database/connection');
dotenv.config();
const app = express();

dbConnect();
//3rd party Middleware
app.use(cors());

//Request Payload Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/product', require('./routes/product.router'));
app.use('/api/v1/user', require('./routes/user.router'));

//swagger


app.get('/', (req, res, next) => {
    try{
        res.send("Hello");
    }
    catch(err){
        console.log(err)
    }
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});


//Error Handling myMiddleware

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send({
        status: 500,
        message: err.message,
        body: {}
    })
})