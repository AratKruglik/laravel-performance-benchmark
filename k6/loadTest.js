import http from 'k6/http';
import {sleep} from "k6";

export const options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: true,
    stages: [
        {duration: '1m', target: 10},
        {duration: '1m', target: 20},
        {duration: '1m', target: 0},
    ],
    thresholds: {
        http_req_duration: ['p(99)<100'],
    }
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