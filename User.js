import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {   
        id: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        firstName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        lastName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 5,
        },
        phone: {
            type: String,
            required: true,
            min: 10,
            max: 10,
        },
        adhaar: {
            type: String,
            required: true,
            min: 10,
            max: 10,
        },
        address: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
    },
    { timestamps: true }
)

const User = mongoose.model("User", UserSchema);
export default User;