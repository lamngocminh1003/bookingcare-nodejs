require('dotenv').config();
import nodemailer from "nodemailer";


let sendSimpleEmail = async(dataSend)=>{
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_APP, // generated ethereal user
      pass: process.env.EMAIL_APP_PASSWORD, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Booking Care" <lamngocminh1003@gmail.com>', // sender address
    to: dataSend.receiverEmail,// list of receivers
    subject: "Thông tin đặt lịch khám bệnh", // Subject line
    html: getBodyHTML(dataSend)
    ,
  });
}
let getBodyHTML = (dataSend) => {
  let result = ' '
  if(dataSend.language==='vi'){
    result = `<h3>Xin chào ${dataSend.patientName}! </h3>
    <p>Bạn nhận được email này vì đã đặt lịch khám bệnh online thành công tại Booking care </p>
    <p>Thông tin đặt lịch khám bệnh: </p>
    <div><b>Thời gian khám bệnh: ${dataSend.time}</b></div>
    <div><b>Cùng với bác sĩ: ${dataSend.doctorName}</b></div>
    <p>Nếu các thông tin trên chính xác. Vui lòng nhập vào đường dẫn bên dưới để xác nhận & hoàn tất thủ tục đặt lịch khám bệnh </p>
    <div><a href=${dataSend.redirectLink} target="_blank">Tại đây</a></div>
    <div>Booking care xin chân thành cảm ơn!</div>
    `
  }
  if(dataSend.language==='en'){
    result= `<h3>Dear ${dataSend.patientName}! </h3>
    <p>You received this email because you have successfully booked an online medical appointment at Booking care. </p>
    <p>Information to schedule your appointment: </p>
    <div><b>Time: ${dataSend.time}</b></div>
    <div><b>With a doctor: ${dataSend.doctorName}</b></div>
    <p>If the above information is correct. Please enter the link below to confirm & complete the booking procedure </p>
    <div><a href=${dataSend.redirectLink} target="_blank">Click here</a></div>
    <div>Booking care sincerely thanks!</div>
    `
  }
  return result;
}
module.exports ={
    sendSimpleEmail:sendSimpleEmail,
    getBodyHTML:getBodyHTML
}