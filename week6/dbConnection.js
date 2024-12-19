import { MongoClient } from 'mongodb';

// Replace the uri string with your connection string.
const uri = `mongodb+srv://s224394372:5ep3VHN7RNLOF25s@cluster0.dhiel.mongodb.net/`;

// import { MongoClient, Server } from 'mongodb';
const client = new MongoClient(uri);

export { client }
