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
app.get("/raakib", (req, res) => { 
   res.send("Express on Vercelsdfasddfsdfsdfsdfsadfsadfsadfasdf");
}); 


 try{
 app.listen(
   process.env.PORT || 5000, () => { 
    console.log(`Server is running on port ${process.env.PORT}`);
 }
 )
}
 catch(error){
   console.error("Error: " , error)
   throw err
}

 
  