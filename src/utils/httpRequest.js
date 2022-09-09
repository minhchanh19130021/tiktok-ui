import axios from 'axios';
const htppRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, options = {}) => {
    const response = await htppRequest.get(path, options);
    return response.data;
};

export default htppRequest;