import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import { connect } from "mongoose";
import auth from "./routes/auth";
import credits from "./routes/credits";
import cors from "cors";

const PORT = process.env.PORT || 4000;
dotenv.config();
const app: Application = express();

// SETTINGS
const db = async () => {
    connect(process.env.DB_URL || "");
    console.log("DB connected");
    app.listen(PORT, () => console.log(`Listening on ${PORT}...`));
};
db();
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.redirect("https://github.com/theVedanta");
});
app.use("/auth", auth);
app.use("/credits", credits);
