import handbookService from '../services/handbookService';

let createNewHandbook = async (req,res) =>{
    try {
        let response = await handbookService.createNewHandbook(req.body)
        return res.status(200).json(response);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode:-1,
            errMessage:'error from server'
        })
    }
}
let getAllHandbook =async (req,res) =>{
    try {
        let handbook = await handbookService.getAllHandbook()
        return res.status(200).json(handbook)
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode:-1,
            errMessage:'error from server'
        })
    }
}
let handleDeleteHandbook = async(req,res) => {
    if(!req.body.id){
        return res.status(200).json({
            errCode:1,
            errMessage: 'Missing required parameter'
        })
    }else{
        let message = await handbookService.deleteHandbook(req.body.id);
        return res.status(200).json(message);
    }
}
let handleEditHandbook = async(req,res) => {
    let data = req.body;
    let message = await handbookService.updateHandbookData(data);
    return res.status(200).json(message)
}

let getDetailHandbookById =async (req,res) =>{
    try {
        let info = await handbookService.getDetailHandbookById(req.query.id);
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
    createNewHandbook:createNewHandbook,
    getAllHandbook:getAllHandbook,
    handleDeleteHandbook:handleDeleteHandbook,
    handleEditHandbook:handleEditHandbook,
    getDetailHandbookById:getDetailHandbookById
}