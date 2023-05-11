import db from "../models/index";
import _ from 'lodash';
require ('dotenv').config();
const MAX_NUMBER_SCHEDULE = process.env.MAX_NUMBER_SCHEDULE;
let getTopDoctorHome =(limitInput) =>{
    return new Promise(async(resolve, reject) =>{
        try {
            let users = await db.User.findAll({
                limit: limitInput,
                where:{roleId:'R2'},
                order:[["createdAt", "DESC"]],
                attributes:{
                    exclude: ['password']
                },
                include:[
                    {model: db.Allcode, as:'positionData',attributes:['valueEn','valueVi']},
                    {model: db.Allcode, as:'genderData',attributes:['valueEn','valueVi']}
                ],
                raw:true,
                nest:true
            })
            resolve({
                errCode:0,
                data:users
            })
        } catch (e) {
            reject(e);
        }
    })
}

let getAllDoctors =()=>{
    return new Promise(async(resolve, reject)=>{
        try {
            let doctors = await db.User.findAll({
                where:{roleId:'R2'},
                attributes:{
                    exclude: ['password','image']
                }
            })
            resolve({
                errCode:0,
                data:doctors
            })
        } catch (e) {
            reject(e)
        }
    })
}

let saveDetailInfoDoctors =(inputData)=>{
    return new Promise(async(resolve, reject)=>{
        try {

            if(   !inputData.doctorId 
                ||!inputData.contentHTML
                ||!inputData.contentMarkdown
                ||!inputData.test
                ||!inputData.selectedPrice
                ||!inputData.selectedPayment
                ||!inputData.selectedProvince
                ||!inputData.nameClinic
                ||!inputData.addressClinic
                ||!inputData.note){
                resolve({
                    errCode:1,
                    errMessage:'Missing parameter'
                })
            }else{
                //upsert to markdown table
                if(inputData.test ==='CREATE'){
                    await db.Markdown.create({
                        contentHTML:inputData.contentHTML,
                        contentMarkdown:inputData.contentMarkdown,
                        description:inputData.description,
                        doctorId:inputData.doctorId
                    })
                }else if(inputData.test ==='EDIT'){
                    let doctorMarkdown = await db.Markdown.findOne({
                        where:{doctorId: inputData.doctorId}, 
                        raw:false, 
                    })
                    if(doctorMarkdown){
                        doctorMarkdown.contentHTML=inputData.contentHTML;
                        doctorMarkdown.contentMarkdown=inputData.contentMarkdown;
                        doctorMarkdown.description=inputData.description;
                        await doctorMarkdown.save() 
                    }
                }
                //upsert to doctor info table
                let doctorInfo = await db.Doctor_Info.findOne({
                    where:{doctorId: inputData.doctorId},
                    raw:false
                })
                if(doctorInfo){
                    doctorInfo.doctorId=inputData.doctorId;
                    doctorInfo.priceId=inputData.selectedPrice;
                    doctorInfo.paymentId=inputData.selectedPayment;
                    doctorInfo.provinceId=inputData.selectedProvince;

                    doctorInfo.nameClinic=inputData.nameClinic;
                    doctorInfo.addressClinic=inputData.addressClinic;
                    doctorInfo.note=inputData.note;

                    await doctorInfo.save() 
                }else{
                    await db.Doctor_Info.create({
                    doctorId:inputData.doctorId, 
                    priceId:inputData.selectedPrice,
                    paymentId:inputData.selectedPayment,
                    provinceId:inputData.selectedProvince,

                    nameClinic:inputData.nameClinic,
                    addressClinic:inputData.addressClinic,
                    note:inputData.note
                    })
                }
                resolve({
                    errCode:0,
                    errMessage:'Save info doctor successfully'
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}
let getDetailDoctorById =(inputId)=>{
    return new Promise(async(resolve, reject)=>{
        try {
            if(!inputId){
                resolve({
                    errCode:1,
                    errMessage:'Missing required parameter'
                })
            }else{
                let data = await db.User.findOne({
                    where:{
                        id:inputId
                    },
                    attributes:{
                        exclude: ['password']
                    },
                    include:[
                        {model: db.Doctor_Info,
                         attributes:{
                            exclude: ['id','doctorId']
                         },
                         include:[
                        {model: db.Allcode, as:'priceTypeData',attributes:['valueEn','valueVi']},
                        {model: db.Allcode, as:'paymentTypeData',attributes:['valueEn','valueVi']},
                        {model: db.Allcode, as:'provinceTypeData',attributes:['valueEn','valueVi']},
                        ]},

                        {model: db.Markdown, attributes:['description','contentHTML', 'contentMarkdown']},
                        {model: db.Allcode, as:'positionData',attributes:['valueEn','valueVi']},
                    ],
                    raw:false,
                    nest:true
                })
                if(data && data.image){
                    data.image = new Buffer(data.image,'base64').toString('binary');
                }
                if(!data) data = {};
                
                resolve({
                    errCode:2,
                    data:data
                })
            }
            resolve({
                errCode:0,
                data:doctors
            })
        } catch (e) {
            reject(e)
        }
    })
}
let getExtraInfoDoctorById =(doctorId)=>{
    return new Promise(async(resolve, reject)=>{
        try {
            if(!doctorId){
                resolve({
                    errCode:1,
                    errMessage:'Missing required parameter'
                })
            }else{
                let data = await db.Doctor_Info.findOne({
                    where:{
                        doctorId:doctorId
                    },
                    attributes:{
                        exclude: ['id','doctorId']
                    },
                    include:[
                        {model: db.Allcode, as:'priceTypeData',attributes:['valueEn','valueVi']},
                        {model: db.Allcode, as:'paymentTypeData',attributes:['valueEn','valueVi']},
                        {model: db.Allcode, as:'provinceTypeData',attributes:['valueEn','valueVi']},
                    ],
                    raw:false,
                    nest:true
                })
                if(!data) data = {};
                
                resolve({
                    errCode:2,
                    data:data
                })
            }
            resolve({
                errCode:0,
                data:doctors
            })
        } catch (e) {
            reject(e)
        }
    })
}
let bulkCreateSchedule = (data) => {
    return new Promise(async(resolve, reject)=>{
        try {
            if(!data.arrSchedule || !data.doctorId || !data.formattedDate){
                resolve({
                    errCode:1,
                    errMessage:'Missing required parameter'
                })
            }else{
                let schedule = data.arrSchedule;
                if(schedule && schedule.length>0){
                    schedule =schedule.map(item =>{
                        item.maxNumber = MAX_NUMBER_SCHEDULE;
                        return  item ;
                    })
                }
                //get all existing data
                let existing = await db.Schedule.findAll({
                    where:{doctorId: data.doctorId , date: data.formattedDate},
                    attributes:['timeType','date','doctorId','maxNumber'],
                    raw:true
                })

                //compare different
                let toCreate = _.differenceWith(schedule,existing,(a,b)=>{
                    return a.timeType === b.timeType && +a.date === +b.date;
                });
                //create data
                if(toCreate && toCreate.length>0){
                    await db.Schedule.bulkCreate(toCreate)

                }
                resolve({
                    errCode:0,
                    errMessage:'oki'
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let getScheduleDoctorByDate = (doctorId,date)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            if (!doctorId || !date){
                resolve({
                    errCode:1,
                    errMessage:'Missing required parameter'
                })
            }else{
                let dataSchedule =await db.Schedule.findAll({
                    where: {
                        doctorId:doctorId,
                        date:date
                    },                    
                    include:[
                        {model: db.Allcode, as:'timeTypeData',attributes:['valueEn','valueVi']},
                    ],
                    raw:false,
                    nest:true
                })
                if (!dataSchedule) dataSchedule = [];
                resolve({
                    errCode:0,
                    data:dataSchedule
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let getProfileDoctorById=(inputId)=>{
    return new Promise(async(resolve, reject)=>{
        try {
            if (!inputId){
                resolve({
                    errCode:1,
                    errMessage:'Missing required parameter'
                })
            }else{
                let data = await db.User.findOne({
                    where:{
                        id:inputId
                    },
                    attributes:{
                        exclude: ['password']
                    },
                    include:[
                        {model: db.Doctor_Info,
                         attributes:{
                            exclude: ['id','doctorId']
                         },
                         include:[
                        {model: db.Allcode, as:'priceTypeData',attributes:['valueEn','valueVi']},
                        {model: db.Allcode, as:'paymentTypeData',attributes:['valueEn','valueVi']},
                        {model: db.Allcode, as:'provinceTypeData',attributes:['valueEn','valueVi']},
                        ]},
                        {model: db.Allcode, as:'positionData',attributes:['valueEn','valueVi']},
                        {model: db.Markdown, attributes:['description']},
                    ],
                    raw:false,
                    nest:true
                })
                if(data && data.image){
                    data.image = new Buffer(data.image,'base64').toString('binary');
                }
                if(!data) data = {};
                
                resolve({
                    errCode:2,
                    data:data
                })
            }
            resolve({
                errCode:0,
                data:doctors
            })
        } catch (e) {
            reject(e)
        }
    })
}
module.exports ={
    getTopDoctorHome:getTopDoctorHome,
    getAllDoctors:getAllDoctors,
    saveDetailInfoDoctors:saveDetailInfoDoctors,
    getDetailDoctorById:getDetailDoctorById,
    bulkCreateSchedule:bulkCreateSchedule,
    getScheduleDoctorByDate:getScheduleDoctorByDate,
    getExtraInfoDoctorById:getExtraInfoDoctorById,
    getProfileDoctorById:getProfileDoctorById
}