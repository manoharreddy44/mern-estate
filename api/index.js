import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routers/user.router.js';
import authRouter from './routers/auth.router.js';

dotenv.config();



mongoose.connect("mongodb+srv://manohar:manohar@cluster0.qnzf0b8.mongodb.net/mern-estate?retryWrites=true&w=majority&appName=Cluster0").then(() => {
  console.log('Connected to MongoDB!');
}).catch((err) => { 
  console.error(err); 
});
const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);