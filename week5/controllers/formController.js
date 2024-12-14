let collection = require('../models/formModel');

const postUserDataCont = (req,res) => {
    // console.log('cont error');
    let userData = req.body;
    collection.postUserData(userData, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

module.exports = { postUserDataCont };