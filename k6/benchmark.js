import http from 'k6/http';
import {sleep} from "k6";

export const options = {
    insecureSkipTLSVerify: true,
    // iterations: 50000,
    // Key configurations for avg load test in this section
    stages: [
        { duration: '1m', target: 100 }, // traffic ramp-up from 1 to 1000 users over 1 minute.
        // { duration: '1m', target: 100 }, // stay at 100 users for 1 minute
        // { duration: '5m', target: 0 }, // ramp-down to 0 users
    ],
};

export default () => {
    const params = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    };

    const response = http.get('http://localhost/api/users');
    // sleep(1);
    // MORE STEPS
    // Here you can have more steps or complex script
    // Step1
    // Step2
    // etc.
};
