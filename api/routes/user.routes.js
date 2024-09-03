import express from "express";
import { signin, signup } from "../controller/user.controller.js";

const app = express();

app.post('/signup',signup);
app.post('/signin',signin);
// app.post('/forgotPassword',forgotPassword);

export default app;