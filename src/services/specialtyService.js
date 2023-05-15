import db from "../models/index";
import _ from 'lodash';
require ('dotenv').config();

let createNewSpecialty =(data)=>{
    return new Promise(async(resolve, reject)=>{
        try {
            if(!data.name 
                || !data.imageBase64 
                || !data.descriptionHTML 
                || !data.descriptionMarkdown 
                ){
                resolve({
                    errCode:1,
                    errMessage:'Missing parameter'
                })
            }else{
                await db.Specialty.create({
                    name:data.name,
                    image:data.imageBase64,
                    descriptionHTML:data.descriptionHTML,
                    descriptionMarkdown:data.descriptionMarkdown
                })
                resolve({
                    errCode:0,
                    errMessage:'Ok'
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}
let getAllSpecialties =()=>{
    return new Promise(async(resolve, reject)=>{
        try {
            let specialties = await db.Specialty.findAll({
                raw: true
            })
            // if(specialties && specialties.length>0){
            //     specialties.map(item => {
            //         item.image = new Buffer(item.image,'base64').toString('binary');
            //         return item
            //     })
            // }
            if(!specialties) specialties = {};
            resolve({
                errCode:0,
                errMessage:'ok',
                specialties
            })
        } catch (e) {
            reject(e)
        }
    })
}
let deleteSpecialty = (specialtyId) => {
    return new Promise(async(resolve, reject)=>{
        let specialty = await db.Specialty.findOne({
            where : { id : specialtyId },
            raw : false,
        })
        if(!specialty){
            resolve({
                errCode:2,
                errMessage: `The specialty does not exist`
            })
        }
        await specialty.destroy();
        resolve({
            errCode:0,
            message: `The specialty is deleted successfully`
        })
    })
}
let updateSpecialtyData = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.id || !data.name || !data.descriptionHTML||!data.descriptionMarkdown){
                resolve({
                    errCode :2,
                    errMessage: 'Missing required parameter'
                })
            }
            let specialty = await db.Specialty.findOne({
                where:{ id : data.id } ,
                raw : false,
            })
            if(specialty){
                specialty.name = data.name;
                specialty.descriptionHTML = data.descriptionHTML;
                specialty.descriptionMarkdown = data.descriptionMarkdown;
                if(data.image){
                    specialty.image= data.image;
                }
                await  specialty.save();
                resolve({
                    errCode :0,
                    message: 'Update the specialty succeeded'
                });
            }else{
                resolve({
                    errCode :1,
                    errMessage: `Specialty isn't found`
                });
            }
        } catch (error) {
            reject(error);
        }
    })
}
let getDetailSpecialtyById = (inputId,location) =>{
    return new Promise(async(resolve, reject) =>{
        try {
            if(!inputId || !location){
                resolve({
                    errCode:1,
                    errMessage:'Missing parameter'
                })}
                else{
                    let data = await db.Specialty.findOne({
                        where:{
                            id:inputId
                        }, 
                        attributes:['descriptionHTML','descriptionMarkdown']
                    })
                    if(data){
                        let doctorSpecialty =[]
                        if(location ==='ALL'){
                            doctorSpecialty = await db.Doctor_Info.findAll({
                                where:{specialtyId:inputId},
                                attributes:['doctorId','provinceId']
                            })
                        }else{
                            doctorSpecialty = await db.Doctor_Info.findAll({
                                where:{
                                    specialtyId:inputId,
                                    provinceId:location
                                },
                                attributes:['doctorId','provinceId']
                            })
                        }
                        data.doctorSpecialty= doctorSpecialty
                    }else data = {}
                    resolve({
                        errCode:0,
                        errMessage: `ok`,
                        data
                    })
                }
        } catch (e) {
            reject(e)
        }
    })
}
module.exports ={
    createNewSpecialty:createNewSpecialty,
    getAllSpecialties:getAllSpecialties,
    deleteSpecialty:deleteSpecialty,
    updateSpecialtyData:updateSpecialtyData,
    getDetailSpecialtyById:getDetailSpecialtyById
}