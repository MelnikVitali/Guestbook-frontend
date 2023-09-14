// const API_URL = process.env.REACT_APP_baseURL;
const API_URL = (process.env.NODE_ENV === "production") ? process.env.REACT_APP_baseURL : process.env.REACT_APP_localURL;
// const API_URL = process.env.REACT_APP_localURL;

console.log(process.env.NODE_ENV);

export const APIUrls = {
    comments: `${API_URL}/comments`,
};

