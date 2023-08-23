import express from 'express'; // 
const { Express } = express;
// import { Express } from "express";

import cors from "cors"; // cross origin resource sharing

const app = express();

app.use(cors({
    // allow server to get the ui from clientm useful for production env
    origin: "http://localhost:5173", 
}));

const port = process.env.PORT || 3005; // get port from env file or use 5000 

app.get("/", (req, res) => { // create a route for the server 
    res.send("Hello World from our API!");
})

app.listen(port, () => { // start the server on port 
    console.log(`Server is running on port ${port}`);
})