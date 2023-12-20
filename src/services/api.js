import axios from "axios";

export const getAllStartups = async () => {
    try {
        const res = await axios.get("http://localhost:5001/startups");
        const data = await res.data;
        return data;
    } catch (err) {
        console.log('error in fetching startup', err)
    }
}

export const getStartupByIndustry = async (industry) => {
    try {
        const res = await axios.get(`http://localhost:5001/startups/${industry}`);
        const data = await res.data;
        return data;
    } catch (err) {
        console.log('error in fetching startup', err)
    }
}

export const createnewstartup = async (startupData) => {
    try {
        const res = await axios.post('http://localhost:5001/createstartup', startupData);
        const data = await res.data;
        return res.status;
    } catch (err) {
        console.log('error in creating a new startup', err)
    }
}

export const searchStartups = async (query) => {
    try {
        const res = await axios.get(`http://localhost:5001/search?q=${query}`);
        const data = await res.data;
        return data;
    } catch (err) {
        console.error('Error searching startups:', err);
        throw err
    }

}

