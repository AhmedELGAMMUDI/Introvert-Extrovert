import axios from 'axios'

export const api = async (method, url) => {
    const headers ={}
    const response = await axios({
        method,
        url,
        headers
    });
    return response.data;
}