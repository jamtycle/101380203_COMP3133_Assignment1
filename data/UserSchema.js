import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        minlength: 3,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    },
    password: {
        type: String,
        required: true,
    },
});

const User = model("a1-user", userSchema);

export default User;