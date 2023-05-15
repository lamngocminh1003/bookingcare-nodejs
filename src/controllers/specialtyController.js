import specialtyService from '../services/specialtyService';

let createNewSpecialty = async (req,res) =>{
    try {
        let response = await specialtyService.createNewSpecialty(req.body)
        return res.status(200).json(response);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode:-1,
            errMessage:'error from server'
        })
    }
}
let getAllSpecialties =async (req,res) =>{
    try {
        let specialties = await specialtyService.getAllSpecialties()
        return res.status(200).json(specialties)
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode:-1,
            errMessage:'error from server'
        })
    }
}
let handleDeleteSpecialty = async(req,res) => {
    if(!req.body.id){
        return res.status(200).json({
            errCode:1,
            errMessage: 'Missing required parameter'
        })
    }else{
        let message = await specialtyService.deleteSpecialty(req.body.id);
        return res.status(200).json(message);
    }
}
let handleEditSpecialty = async(req,res) => {
    let data = req.body;
    let message = await specialtyService.updateSpecialtyData(data);
    return res.status(200).json(message)
}

let getDetailSpecialtyById =async (req,res) =>{
    try {
        let info = await specialtyService.getDetailSpecialtyById(req.query.id, req.query.location);
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
    createNewSpecialty:createNewSpecialty,
    getAllSpecialties:getAllSpecialties,
    handleDeleteSpecialty:handleDeleteSpecialty,
    handleEditSpecialty:handleEditSpecialty,
    getDetailSpecialtyById:getDetailSpecialtyById
}