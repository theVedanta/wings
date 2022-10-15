import { model, Schema, Types } from "mongoose";

interface UserInterface {
    name: string;
    email: string;
    authToken: string;
    credits: number;
    flights: Types.ObjectId[];
}

const userSchema = new Schema<UserInterface>({
    name: { type: String },
    email: { type: String },
    authToken: { type: String },
    credits: { type: Number },
});

const User = model<UserInterface>("user", userSchema);
export default User;
