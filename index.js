import dotenv from "dotenv";

import express from 'express';
import cors from "cors";
dotenv.config({
   path: './.env'
})


const app = express(); 
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => { 
    res.send("Express on Vercel");
 }); 
 app.get("/rakib", (req, res) => { 
   res.send("Express on Vercelsdfasddfsd");
}); 
 const PORT = process.env.PORT || 5000; 
 app.listen(
    PORT, () => { 
    console.log(`Server is running on port ${PORT}`);
 });