import axios from "axios";

const randomRecommend = ["stories", "horror", "suspense", "funny", "romantic"];
const randomNum = Math.floor(Math.random()*4);


export const request = axios.create({
    baseURL: "https://www.googleapis.com/books/v1/",
    params: {
        key: 'AIzaSyBn-I_mCRpLadK16M8cCI_NTzPuB7klAXg',
    },
})


export const getVolumes = axios.create({
    baseURL: "https://www.googleapis.com/books/v1/volumes/",
    params: {
        q: randomRecommend[randomNum],
        maxResults:20,
    },
})


//npm install contentful