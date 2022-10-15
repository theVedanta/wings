import { Request, Response, Router } from "express";
import User from "../models/User";
const router = Router();

router.get("/", async (req: Request, res: Response) => {
    const authToken = req.body.authToken;
    const user = await User.findOne({ authToken });

    const credits: number = <number>user?.credits;

    res.json({ credits });
});

export default router;
