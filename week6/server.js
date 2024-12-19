import express from 'express';
import {router} from './routers/router.js';
// import {client} from './dbConnection.js';
import { fileURLToPath } from 'url';
import path from 'path';

// var express = require("express")
var app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(__dirname +'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// let router = require('./routers/router');

var port = 8080;
// require('./dbConnection');
// const { dbConnection } = require('./dbConnection');
app.use('/admin',router);


app.listen(port, () => {
    console.log('Express server started on port :',port);
    // client();
});