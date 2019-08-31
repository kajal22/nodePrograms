
let input = require('readline-sync')
let fs = require("fs");
class ClinicInfo {
    constructor() {

    }


    AddDoctor(object1) {
        let format = /^[a-zA-Z]+$/;
        let formatNum =/^\d{10,10}$/; 

   try{
        console.log("\t enter doctor ID")
        let ID = input.question()
        if (formatNum.test(ID) == false) throw "ID should in number format";


        console.log("\t enter doctor Name")
        let name = input.question()
        if (format.test(name) == false) throw "name should in string format";

        console.log("\t Enter doctor's specialization")
        let specialization = input.question()
        if (format.test(specialization) == false) throw "specialization should in string format";


        console.log("\t Enter doctor's availability")
        let availability = input.question()
        if (format.test(availability) == false) throw "availability should in string format";


        object1.push(
            {

                "ID": ID,
                "name": name,
                "specialization": specialization,
                "availability": availability,


            });
        this.saveFilepatient(object1)
    }catch(e)
    {
        return e
    }
    return [ID,name,specialization,availability]
    }



    AddPatient(object2) {

        let format = /^[a-zA-Z]+$/;
        let formatNum =/^\d{10,10}$/; 
        
        console.log("\t 2.enter patient ID")
        let ID = input.question()
        if (formatNum.test(ID) == false) throw "ID should in number format";

        console.log("\t 1.enter patient Name")
        let name = input.question()
        if (format.test(name) == false) throw "name should in string format";

        console.log("\t Enter patients mob no")
        let mobilenumber = input.questionInt()
        if (formatNum.test(mobilenumber) == false) throw "mobilenumber should in number format";

        object2.push(
            {
                "ID": ID,
                "name": name,
                "PatientMob": mobilenumber,
            });
        this.saveFilepatient(object2)
       
        
        return [ID,name,phonenumber]
    }



    bookappointment(object2, object1, appointment) {
        console.log("\n Search Your Record ");
        let patientsearched = this.PatientSearch(object2);
        if (patientsearched != -1) {
            console.log("Your Record Found");

            this.newAppointment(patientsearched, object1, appointment)
        }
        else {
            console.log("Your Record not found");
            let patientName = this.AddPatient(object2);
            console.log("patient data added sucessfully...")
            this.newAppointment(patientName, object1, appointment)
        }

    }

    newAppointment(patientName, object1, appointment) {
        console.log(patientName + "  name   ");

        let flag = 0
        console.log("display all doctor list ")
        this.displaydoctor(object1)

        console.log("enter which doctor you want for the appointment")
        let specialization = input.question()
        for (let i = 0; i < object1.length; i++)

            if (object1[i].specialization.toUpperCase() === specialization.toUpperCase()) {
                console.log("enter what time you want an appointment, select from doctor name ")
                console.log("enter for your suitable time  ")
                let time = input.question().toUpperCase()
                if (object1[i].availability === time) {
                    if (object1[i].Patientqueue < 5) {
                        appointment.push(
                            {
                                "PatientName": patientName,
                                "DoctorName": object1[i].specialization,
                                "time": time,
                            });
                        fs.writeFileSync('appointment.json', JSON.stringify(appointment))


                        object1[i].Patientqueue = object1[i].Patientqueue + 1
                        fs.writeFileSync('doctor.json', JSON.stringify(object1))
                        console.log("Apppointment sucessfully done ")
                    }
                    else {
                        console.log("no Appointment")
                    }
                }
                else {
                    console.log("Doctor not available at " + time)
                }
                flag = 1
                break;

            }
        if (flag == 0) {
            console.log("No such doctor")
        }


    }

    PatientSearch(object2) {

        console.log("\t 1.enter patient id")
        let ID = input.question()
        let i;
        for (i = 0; i < object2.length; i++)
            if (object2[i].ID == ID) {
                console.log("patientID : " + object2[i].ID);
                console.log("PatientName : " + object2[i].name);
                console.log("MObile-NO : " + object2[i].mobilenumber);
                return object2[i].name

            }
        return -1;

    }


    doctorSearch(object1) {
        console.log("\t 1.enter doctor specialization and avaialabilty")
        let specialization = input.question()
        let availability = input.question()
        for (let i = 0; i < object1.length; i++)

            if (object1[i].specialization == specialization && object1[i].availability == availability) {
                console.log("doctorID : " + object1[i].ID);
                console.log("Name : " + object1[i].name);
                console.log("specialization : " + object1[i].specialization);
                console.log("availability : " + object1[i].availability);
                console.log("the doctor u have entered is found")
            }
            else {
                console.log("No Such doctor")
            }

    }


    displaypatient(object2) {


        for (let i = 0; i < object2.length; i++) {
            console.log("FirstName : " + object2[i].ID);
            console.log("LastName : " + object2[i].name);
            console.log("phonenumber : " + object2[i].PatientMob);

        }


    }

    displaydoctor(object1) {
        for (let i = 0; i < object1.length; i++) {
            console.log("doctorID : " + object1[i].ID);
            console.log("Name : " + object1[i].name);
            console.log("specialization : " + object1[i].specialization);
            console.log("availability : " + object1[i].availability);
        }
    }
    deletepatient(object2) {
        console.log("enter id which you want to delete")
        let ID = input.questionInt()


        for (let i = 0; i < object2.length; i++) {

            if (object2[i].ID == ID) {
                object2.splice(i, 1)
                console.log("data deleted sucessfully...")
            }
            else {
                console.log("No Such Data......")
            }
        }
    }


    deletedoctor(object1) {
        console.log("enter id which you want to delete")
        let ID = input.questionInt()


        for (let i = 0; i < object1.length; i++) {

            if (object1[i].ID == ID) {
                object1.splice(i, 1)
                console.log("data deleted sucessfully...")
            }
            else {
                console.log("NO such Data.....")
            }
        }
    }

    saveFiledoc(object1) {
        try {

            fs.writeFileSync('clinicdata.json', JSON.stringify(object1))
            console.log("All updated data are saved");

        } catch (e) {
            return e;
        }
    }
    saveFilepatient(object2) {
        try {
            fs.writeFileSync('clinicdata.json', JSON.stringify(object2))
            console.log("All updated data are saved");

        } catch (e) {
            return e;
        }
    }
}

module.exports = { ClinicInfo }

