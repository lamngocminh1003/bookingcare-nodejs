import db from "../models/index";
import _ from 'lodash';
require ('dotenv').config();

let createNewHandbook =(data)=>{
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
                await db.Handbook.create({
                    name:data.name,
                    image:data.imageBase64,
                    descriptionHTML:data.descriptionHTML,
                    descriptionMarkdown:data.descriptionMarkdown,
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
let getAllHandbook =()=>{
    return new Promise(async(resolve, reject)=>{
        try {
            let handbook = await db.Handbook.findAll({
                raw: true
            })
            // if(specialties && specialties.length>0){
            //     specialties.map(item => {
            //         item.image = new Buffer(item.image,'base64').toString('binary');
            //         return item
            //     })
            // }
            if(!handbook) handbook = {};
            resolve({
                errCode:0,
                errMessage:'ok',
                handbook
            })
        } catch (e) {
            reject(e)
        }
    })
}
let deleteHandbook = (handbookId) => {
    return new Promise(async(resolve, reject)=>{
        let handbook = await db.Handbook.findOne({
            where : { id : handbookId },
            raw : false,
        })
        if(!handbook){
            resolve({
                errCode:2,
                errMessage: `The handbook does not exist`
            })
        }
        await handbook.destroy();
        resolve({
            errCode:0,
            message: `The handbook is deleted successfully`
        })
    })
}
let updateHandbookData = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            if(!data.id || !data.name || !data.descriptionHTML||!data.descriptionMarkdown){
                resolve({
                    errCode :2,
                    errMessage: 'Missing required parameter'
                })
            }
            let handbook = await db.Handbook.findOne({
                where:{ id : data.id } ,
                raw : false,
            })
            if(handbook){
                handbook.name = data.name;
                handbook.descriptionHTML = data.descriptionHTML;
                handbook.descriptionMarkdown = data.descriptionMarkdown;
                if(data.image){
                    handbook.image= data.image;
                }
                await  handbook.save();
                resolve({
                    errCode :0,
                    message: 'Update the handbook succeeded'
                });
            }else{
                resolve({
                    errCode :1,
                    errMessage: `Handbook isn't found`
                });
            }
        } catch (error) {
            reject(error);
        }
    })
}
let getDetailHandbookById = (inputId) =>{
    return new Promise(async(resolve, reject) =>{
        try {
            if(!inputId ){
                resolve({
                    errCode:1,
                    errMessage:'Missing parameter'
                })}
                else{
                    let data = await db.Handbook.findOne({
                        where:{
                            id:inputId
                        }, 
                        attributes:['name','image','descriptionHTML','descriptionMarkdown']
                    })
                    if(data && data.image){
                        data.image = new Buffer(data.image,'base64').toString('binary');
                    }
                    else data = {}
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
    createNewHandbook:createNewHandbook,
    getAllHandbook:getAllHandbook,
    deleteHandbook:deleteHandbook,
    updateHandbookData:updateHandbookData,
    getDetailHandbookById:getDetailHandbookById
}