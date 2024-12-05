const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = `mongodb+srv://s224394372:5ep3VHN7RNLOF25s@cluster0.dhiel.mongodb.net/`;

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('mydb');
    const user = database.collection('user');

    // Query for a get record of collection
    const sort = { firstName: -1 };
    const userdata = await user.findOne();

    var mobj = { firstName: "jammy11d", lastName: "Rockan1d" };

    user.insertOne(mobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
    

    console.log(userdata);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);