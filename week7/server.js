var express = require("express")
var app = express()
app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



let router = require('./routers/router');

var port = 8080;
require('./dbConnection');
// const { dbConnection } = require('./dbConnection');
app.use('/admin', router);

//---------------------------------------

const http = require('http').Server(app);
const fs = require('fs');
const path = require('path');
let socketIo = require('socket.io')(http);

// const server = http.createServer((req, res) => {
//     console.log('Express')
//     if (req.url === '/') {
//         const filePath = path.join(__dirname, '/public/index.html');
//         fs.readFile(filePath, (err, data) => {
//             if (err) {
//                 res.writeHead(500);
//                 res.end('Error loading index.html');
//             } else {
//                 res.writeHead(200, { 'Content-Type': 'text/html' });
//                 res.end(data);
//             }
//         });
//     } else if (req.url === '/env.js') {
//         const filePath = path.join(__dirname, 'env.js');
//         fs.readFile(filePath, (err, data) => {
//             if (err) {
//                 res.writeHead(500);
//                 res.end('Error loading env.js');
//             } else {
//                 res.writeHead(200, { 'Content-Type': 'application/javascript' });
//                 res.end(data);
//             }
//         });
//     } else {
//         res.writeHead(404);
//         res.end('Not Found');
//     }
// });

socketIo.on('connection', (socket) => {
    console.log('A User Connected');
    socket.on('disconnect', () => {
        console.log('User Disconnected');
    });
    setInterval(() => {
        socket.emit('number', parseInt(Math.random() * 100));
    }, 1000);
});
//---------------------------------------

http.listen(port, () => {
    console.log('Express server started on port :' + port);
    // dbConnection();
});