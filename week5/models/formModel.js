let client = require('../dbConnection');

let collection = client.db('mydb').collection('user');

function postUserData(userData) {
    // console.log('model error');
    collection.insertOne(userData);
}


module.exports = { postUserData };
