import http from 'k6/http';
import {sleep} from "k6";

export const options = {
    insecureSkipTLSVerify: true,
    vus: 100,
    duration: '2s',
    noConnectionReuse: true,
};

export default () => {
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = http.get('http://localhost/api/users', params);
    sleep(1);
};