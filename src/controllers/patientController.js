import patientService from '../services/patientService';

let postPatientBookAppointment = async (req,res) =>{
    try {
        let response = await patientService.postPatientBookAppointment(req.body)
        return res.status(200).json(response);
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode:-1,
            errMessage:'error from server'
        })
    }
}

module.exports ={
    postPatientBookAppointment:postPatientBookAppointment
}