import e from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import users from './Models/adoptuser.js';
import dotenv from 'dotenv';
dotenv.config();



const app = e();
const PORT = 1234;

app.use(cors());
app.use(e.json());
const Database_conection= async()=>
 {
    const connect = await mongoose.connect(process.env.MongoDB);
  try {
    if (connect) {
      console.log("Database connected successfully");
    }   
    } catch (error) {
      console.log("Database connection failed", error)
    };
 }
Database_conection();



app.post("/Adoptdata", (req, res) => {
  const { name, address,email, contact, petName } = req.body;

  console.log("Adoption Request Received:");
  console.log(req.body);


  res.status(200).json({
    message: "Pet adoption form submitted successfully ",
  });
});

app.listen(PORT, () => {
  console.log("Server running");
});

