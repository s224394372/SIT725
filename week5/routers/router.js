let express = require('express');
let router = express.Router();
let controller = require('../controllers/formController');

router.post('/submit', function(req,res){
    controller.postUserDataCont(req,res);
});

module.exports = router;

