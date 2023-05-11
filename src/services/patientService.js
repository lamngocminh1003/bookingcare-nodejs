import db from "../models/index";
import _ from 'lodash';
require ('dotenv').config();

let postPatientBookAppointment =(data)=>{
    return new Promise(async(resolve, reject)=>{
        try {
            if(!data.email || !data.doctorId || !data.timeType || !data.date){
                resolve({
                    errCode:1,
                    errMessage:'Missing parameter'
                })
            }else{
                //upsert patient
                let user = await db.User.findOrCreate({
                    where:{email:data.email},
                    defaults:{
                        email:data.email,
                        roleId:'R3'
                    },
                })
                //create a booking record
                if(user && user[0]){
                    let { Op } = require("sequelize");
                    await db.Booking.findOrCreate({
                        where:{
                            [Op.or]: [
                            {timeType:data.timeType},
                            {doctorId:data.doctorId},
                            {date:data.date},
                        ]
                        },
                        defaults:{
                            statusId: 'S1',
                            doctorId:data.doctorId,
                            patientId:user[0].id,
                            date:data.date,
                            timeType:data.timeType,
                        },  
                    })
                }
                resolve({
                    errCode:0,
                    errMessage:'Save info user successfully'
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

module.exports ={
    postPatientBookAppointment:postPatientBookAppointment
}