import Cors from 'cors';
import initMiddleware from './initMiddleware';

const corsOptions = {
    origin: [
        'http://localhost:8080',
        'http://localhost:3000',
        'http://127.0.0.1:3000',
        'http://ec2-18-234-125-13.compute-1.amazonaws.com:8080',
        'http://food-ordering-frontend-app.s3-website-us-east-1.amazonaws.com'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Include OPTIONS for preflight requests
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow necessary headers
};
export const cors = initMiddleware(Cors(corsOptions));
