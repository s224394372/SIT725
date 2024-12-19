import { postUserData } from '../models/formModel.js';

const postUserDataCont = async (req,res) => {
    try {
        let data = req.body;
        let result = await postUserData(data);
        res.status(201).json({ statusCode: 201, data: "Data added successfully", message: 'success' });
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: 'Database error', error: err });
    }
}

export { postUserDataCont }