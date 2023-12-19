import axios from "axios";

export const getAllStartups=async()=>{
    const res=await axios.get("http://localhost:5001/startups");
    const data=await res.data;
    return data;
}

// http://localhost:5001/search?q=Anand Sankeshwar