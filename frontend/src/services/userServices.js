import axios from "axios";
let url ="http://localhost:4000"

export function registration(registrationData){
console.log("datataa===",registrationData);

return axios.post(url+'/registration',registrationData)
}