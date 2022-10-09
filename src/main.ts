import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";

const PORT = process.env.PORT || 4000;
dotenv.config();
const app: Application = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
});

app.listen(PORT, () => console.log(`Listening on ${PORT}...`));
