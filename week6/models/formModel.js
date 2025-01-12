import {client} from '../dbConnection.js';

let collection = client.db('mydb').collection('user');

async function postUserData(userData) {
    console.log('model error1');
    if(userData !== null && userData !== ''  && userData !== undefined && Object.keys(userData).length !== 0){
        if(validateUser(userData)){
            return await collection.insertOne(userData);
        }
    }
    else{
        throw new Error('userData does not exist');
    }
    
}

function validateUser(user) {

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phonePattern = /^\d{10}$/; 


    // Check if all fields are not null or emptya and except for 'address'
    if (!user.firstName || !user.lastName || !user.email || !user.phone) {
      throw new Error('First name, last name, email, and phone cannot be empty or null.');
    } 
    // Validate email format using a simple regex
    else if (!emailPattern.test(user.email)){
        throw new Error('Invalid email format.');
    }
    // Validate phone format (this can be adjusted for specific formats)
    else if (!phonePattern.test(user.phone)) {
        throw new Error('Invalid phone format. It should be a 10-digit number.');
    }
    else {
        return true;
    }
  }
  
export { postUserData }
