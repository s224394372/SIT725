var express = require("express")
var app = express()
app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


let router = require('./routers/router');

var port = process.env.port || 3000;
require('./dbConnection');
// const { dbConnection } = require('./dbConnection');
app.use('/admin',router);


app.listen(port, () => {
    console.log('Express server started on port : 3000');
    // dbConnection();
});