import db from "../models/index";
import _ from 'lodash';
require ('dotenv').config();

let createNewClinic =(data)=>{
    return new Promise(async(resolve, reject)=>{
        try {
            if(!data.name 
                || !data.imageBase64 
                || !data.descriptionHTML 
                || !data.descriptionMarkdown
                || !data.address
                ){
                resolve({
                    errCode:1,
                    errMessage:'Missing parameter'
                })
            }else{
                await db.Clinic.create({
                    name:data.name,
                    image:data.imageBase64,
                    descriptionHTML:data.descriptionHTML,
                    descriptionMarkdown:data.descriptionMarkdown,
                    address:data.address
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
let getAllClinic =()=>{
    return new Promise(async(resolve, reject)=>{
        try {
            let clinic = await db.Clinic.findAll({
                raw: true
            })
            // if(specialties && specialties.length>0){
            //     specialties.map(item => {
            //         item.image = new Buffer(item.image,'base64').toString('binary');
            //         return item
            //     })
            // }
            if(!clinic) clinic = {};
            resolve({
                errCode:0,
                errMessage:'ok',
                clinic
            })
        } catch (e) {
            reject(e)
        }
    })
}
let deleteClinic = (clinicId) => {
    return new Promise(async(resolve, reject)=>{
        let clinic = await db.Clinic.findOne({
            where : { id : clinicId },
            raw : false,
        })
        if(!clinic){
            resolve({
                errCode:2,
                errMessage: `The clinic does not exist`
            })
        }
        await clinic.destroy();
        resolve({
            errCode:0,
            message: `The clinic is deleted successfully`
        })
    })
}
let updateClinicData = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.id || !data.name || !data.address|| !data.descriptionHTML||!data.descriptionMarkdown){
                resolve({
                    errCode :2,
                    errMessage: 'Missing required parameter'
                })
            }
            let clinic = await db.Clinic.findOne({
                where:{ id : data.id } ,
                raw : false,
            })
            if(clinic){
                clinic.name = data.name;
                clinic.address = data.address;
                clinic.descriptionHTML = data.descriptionHTML;
                clinic.descriptionMarkdown = data.descriptionMarkdown;
                if(data.image){
                    clinic.image= data.image;
                }
                await  clinic.save();
                resolve({
                    errCode :0,
                    message: 'Update the clinic succeeded'
                });
            }else{
                resolve({
                    errCode :1,
                    errMessage: `Clinic isn't found`
                });
            }
        } catch (error) {
            reject(error);
        }
    })
}
let getDetailClinicById = (inputId) =>{
    return new Promise(async(resolve, reject) =>{
        try {
            if(!inputId ){
                resolve({
                    errCode:1,
                    errMessage:'Missing parameter'
                })}
                else{
                    let data = await db.Clinic.findOne({
                        where:{
                            id:inputId
                        }, 
                        attributes:['name','image','address','descriptionHTML','descriptionMarkdown']
                    })
                    if(data && data.image){
                        data.image = new Buffer(data.image,'base64').toString('binary');
                    }
                    
                    if(data){
                        let doctorClinic =[]
                            doctorClinic = await db.Doctor_Info.findAll({
                                where:{clinicId:inputId},
                                attributes:['doctorId','provinceId']
                            })
                        data.doctorClinic= doctorClinic
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
    createNewClinic:createNewClinic,
    getAllClinic:getAllClinic,
    deleteClinic:deleteClinic,
    updateClinicData:updateClinicData,
    getDetailClinicById:getDetailClinicById
}