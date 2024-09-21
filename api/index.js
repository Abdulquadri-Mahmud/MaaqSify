import express from "express";
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import userAuthentication from './routes/user.routes.js';
import listings from './routes/listing_routes.js';

dotenv.config();

const app = express();

app.use(express.json());
// console.log(process.env.database);
mongoose.connect(process.env.db).then(() => {
    console.log('database connected!');
    app.listen(3001, () => {
        console.log('Server is running on port 3001');
    });
}).catch((error)=> {
    console.log(error,'Error while connecting to database!');
});

app.use('/api/auth', userAuthentication);
app.use('/api/listing', listings)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error!';

    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});

