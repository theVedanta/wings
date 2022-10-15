import { Request, Response, Router } from "express";
import User from "../models/User";
import jwt, { JwtPayload } from "jsonwebtoken";
const router = Router();

router.get("/", async (req: Request, res: Response) => {
    try {
        jwt.verify(
            <string>req.query.authToken,
            <string>process.env.ACCESS_TOKEN_SECRET,
            async (err, userFromJWT) => {
                if (err) {
                    return res.json({ expired: true });
                } else {
                    const user = await User.findOne({
                        _id: (<JwtPayload>userFromJWT).id,
                    });
                    return res.json({ user });
                }
            }
        );
    } catch (err) {
        return res.json(err);
    }
});
router.post("/google", async (req, res) => {
    try {
        const body = req.body;
        const user = await User.findOne({ email: body.email });

        if (user) {
            const authToken = jwt.sign(
                { id: user._id },
                <string>process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: "7d" }
            );
            user.authToken = authToken;
            await user.save();

            return res.json({ user });
        } else {
            let user = new User({
                email: body.email,
                pfp: body.pfp,
                name: body.name,
                credits: 0,
            });
            await user.save();

            const newUser = await User.findOne({ email: user.email });
            const authToken = jwt.sign(
                { id: newUser?._id },
                <string>process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: "7d" }
            );
            await User.updateOne(
                { email: newUser?.email },
                { $set: { authToken } }
            );

            user.authToken = authToken;
            await user.save();
            return res.json({ user });
        }
    } catch (err) {
        console.log(err);
        return res.json({ err });
    }
});

export default router;
