let input=require('readline-sync')
let Utility=require('../ClinicManagement/clinicdata')
let fs=require('fs')
let datas1=fs.readFileSync('doctor.json',"utf8")
let object1=JSON.parse(datas1)
let datas2=fs.readFileSync('patient.json',"utf8")
let object2=JSON.parse(datas2)
let datas3=fs.readFileSync('appointment.json',"utf8")
let appointment=JSON.parse(datas3)
function Clinic()
{
let choice
let clinic=new Utility.ClinicInfo;
do{
console.log("\n \t 1.add doctor "+"\n \t 2.add patient"+"\n \t 3.Take an Appointment "+"\n \t 4.Search for a Doctor "+"\n \t 5.Search for a Patient"+"\n\t 6.Delete patient"+"\n \t 7. Delete doctor"+"\n \t 8.Display Doctor"+"\n \t 9.Display Patient"+"\n\t 10.Save all files")
console.log("Enter Your Choice")
choice=input.questionInt()
switch(choice)
  {
    case 1:
        clinic.AddDoctor(object1) 
        console.log("added doctor in data")
        break;

    case 2: clinic.AddPatient(object2) 
    console.log("added patient in data")
    break;

    case 3: clinic.bookappointment(object2,object1,appointment) 
    console.log("booked appointment")
     break;

    case 4: clinic.doctorSearch(object1)
                 
    console.log("searched doctor you wanted")
    break;

    case 5: clinic.PatientSearch(object2)
    console.log("searched Patient you wanted")
    break;
    
    case 6: clinic.deletepatient(object2)
    console.log("deleted Patient")
    break;
    
    case 7: clinic.deletedoctor(object1)
    console.log("deleted doctor")
    break;
    
    case 8: clinic.displaydoctor(object1)
    console.log("dispayed doctor")
    break;
    
    case 9: clinic.displaypatient(object2)
    console.log("dispayed patient")
    break;

    case 10: clinic.saveFiledoc(object1)
    console.log(".....SAVED ALL FILES....")
    break;
    case 11: clinic.saveFilepatient(object2)
    console.log(".....SAVED ALL FILES....")
    break;
    case 12: clinic.appointment(appointment)
    console.log(".....all appointment list...")
    break;
    default : 
    console.log(" wrong choice")/** when user enter wrong choice */
     break;     
  } console.log("press 1 if you want to continue else press 0 to exit the process.....")
    choice=input.questionInt()

}while(choice==1)

fs.writeFileSync('doctor.json',JSON.stringify(object1))
fs.writeFileSync('patient.json',JSON.stringify(object2))
}
module.exports=Clinic()