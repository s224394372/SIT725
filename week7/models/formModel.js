let client = require('../dbConnection');

let collection = client.db('mydb').collection('user');

async function postUserData(userData) {
    console.log('model error1');
    return await collection.insertOne(userData);
    
}


module.exports = { postUserData };


