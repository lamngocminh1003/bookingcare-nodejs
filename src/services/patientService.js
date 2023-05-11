import db from "../models/index";
import _ from 'lodash';
require ('dotenv').config();
import emailService from "../services/emailService";
let postPatientBookAppointment =(data)=>{
    return new Promise(async(resolve, reject)=>{
        try {
            if(!data.email || !data.doctorId || !data.timeType || !data.date || !data.fullName){
                resolve({
                    errCode:1,
                    errMessage:'Missing parameter'
                })
            }else{
                await emailService.sendSimpleEmail({
                    receiverEmail:data.email,
                    patientName:data.fullName,
                    time:data.timeString,
                    doctorName:'Trần Ánh',
                    redirectLink:'https://www.facebook.com/profile.php?id=100027366979129',
                })
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
                    await db.Booking.findOrCreate({
                        where:{
                            patientId:user[0].id
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