import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.get('/', (req, res)=>{
    res.send("Hey")
});
app.listen(process.env.PORT, ()=>{
    console.log(`=>Server is running at ${process.env.PORT}`);
});