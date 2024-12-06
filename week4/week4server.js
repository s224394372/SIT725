var express = require("express")
var app = express()
app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
var port = process.env.port || 3000;
require('./dbConnection');


let client = require('./dbConnection');

const bodyParser = require('body-parser');
// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));
let usercollection = client.db('mydb').collection('user');

// Endpoint to handle form submission
app.post('/submit', async (req, res) => {
    const { firstName, lastName, email, phone, address } = req.body;

    if (!firstName || !lastName || !email || !phone || !address) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    try {
        // const collection = db.collection('user');
        const userData = { firstName, lastName, email, phone, address };
        await usercollection.insertOne(userData);  // Insert data into MongoDB
        res.json({ success: true, message: 'Form data saved successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Database error' });
    }
});


app.listen(port,()=>{
console.log("App listening to: "+port)
})