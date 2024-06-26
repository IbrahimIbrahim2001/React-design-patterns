import axios from "axios";

const client = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com' })


export const request = ({ ...options }) => {
    client.defaults.headers.common.Authorization = 'Bearer token';
    const onSuccess = (response: unknown) => response;
    const onError = (error: React.ErrorInfo) => {
        return error;
    }
    return client(options).then(onSuccess).catch(onError);
}