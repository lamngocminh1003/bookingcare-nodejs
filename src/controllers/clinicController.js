import clinicService from '../services/clinicService';

let createNewClinic = async (req,res) =>{
    try {
        let response = await clinicService.createNewClinic(req.body)
        return res.status(200).json(response);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode:-1,
            errMessage:'error from server'
        })
    }
}
let getAllClinic =async (req,res) =>{
    try {
        let clinic = await clinicService.getAllClinic()
        return res.status(200).json(clinic)
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode:-1,
            errMessage:'error from server'
        })
    }
}
let handleDeleteClinic = async(req,res) => {
    if(!req.body.id){
        return res.status(200).json({
            errCode:1,
            errMessage: 'Missing required parameter'
        })
    }else{
        let message = await clinicService.deleteClinic(req.body.id);
        return res.status(200).json(message);
    }
}
let handleEditClinic = async(req,res) => {
    let data = req.body;
    let message = await clinicService.updateClinicData(data);
    return res.status(200).json(message)
}

let getDetailClinicById =async (req,res) =>{
    try {
        let info = await clinicService.getDetailClinicById(req.query.id);
        return res.status(200).json(info)
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode:-1,
            errMessage:'error from server'
        })
    }
}
module.exports ={
    createNewClinic:createNewClinic,
    getAllClinic:getAllClinic,
    handleDeleteClinic:handleDeleteClinic,
    handleEditClinic:handleEditClinic,
    getDetailClinicById:getDetailClinicById
}