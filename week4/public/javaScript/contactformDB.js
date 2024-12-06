// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(express.static('public'));

// let client = require('../dbConnection');

// let usercollection = client.db().collection('user');

// // Endpoint to handle form submission
// app.post('/submit', async (req, res) => {
//     const { firstName, lastName, email, phone, address } = req.body;

//     if (!firstName || !lastName || !email || !phone || !address) {
//         return res.status(400).json({ success: false, message: 'All fields are required' });
//     }

//     try {
//         // const collection = db.collection('user');
//         const userData = { firstName, lastName, email, phone, address };
//         await usercollection.insertOne(contact);  // Insert data into MongoDB
//         res.json({ success: true, message: 'Form data saved successfully' });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ success: false, message: 'Database error' });
//     }
// });

