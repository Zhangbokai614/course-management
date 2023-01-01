import { extend } from "umi-request"

const request = extend({
    prefix: 'http://localhost:4000',
    timeout: 2000,
    headers: {
        'Content-Type': 'multipart/form-data',
    },
    errorHandler: (error) => {
        if (error.response) {
            throw error.response;
        } else {
            throw error.message;
        }
    }
});

export default request;