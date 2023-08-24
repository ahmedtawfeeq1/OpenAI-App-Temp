import express from 'express'; // 
const { Express } = express;
// import { Express } from "express";

import generate from "./generate.js"; // importing your openai generate function

import cors from "cors"; // cross origin resource sharing

const app = express();
app.use(express.json()) // so you can use json body in your POST

.use(cors({
    // allow server to get the ui from client - useful for production env
    origin: "http://localhost:5173", 
}));

const port = process.env.PORT || 3005; // get port from env file or use 5000 

app.get("/", (req, res) => { // create a route for the server 
    res.send("Hello World from our API!");
})

app.post("/generate", async (req, res) => {
    const question = req.body.question
    try {
        const coachAnswer = await generate(question)
        res.json({ response: coachAnswer})
    } catch (error) {
        console.error(error)
        res.status(500).send("Internal Server Error!")
    }

    // console.log("recieved user question: ", question)
    // res.json({ response: `you sent this question: ${question}`})
})  

app.listen(port, () => { // start the server on port 
    console.log(`Server is running on port ${port}`);
})