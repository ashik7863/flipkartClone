import axios, {Axios}from 'axios';
export const authSignup=async(data)=>{
    try{
        return await axios.post('http://localhost:4000/signup',data)
    }catch(error){
        console.log(error.message);
    }
}