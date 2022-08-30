import axios from 'axios';

export const instance = axios.create({
    baseURL: "localhost:9000/api/v1"
});

export function getUser() {
    return new Promise((resolve,reject)=>{
        return resolve({
            id: 1,
            username: "Ulvi",
            email: "test@gmail.com"
        });
    })
}

