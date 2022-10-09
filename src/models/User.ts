import { model, Schema, Types } from "mongoose";

interface UserInterface {
    name: string;
    email: string;
    authToken: string;
    credits: number;
    flights: Types.ObjectId[];
}

const userSchema = new Schema<UserInterface>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    authToken: { type: String, required: true },
    credits: { type: Number, required: true },
});

const User = model<UserInterface>("user", userSchema);
export default User;
