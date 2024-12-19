import express from 'express';
import { postUserDataCont } from '../controllers/formController.js';


let router = express.Router();

router.post('/submit', function(req,res){
    postUserDataCont(req,res);
});


export { router }

