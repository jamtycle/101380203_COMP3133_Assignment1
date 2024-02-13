import { Schema, model } from "mongoose";

const employeeSchema = new Schema({
    first_name: {
        type: String,
        minlength: 3,
        required: true,
    },
    last_name: {
        type: String,
        minlength: 3,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"],
        default: "other",
    },
    salary: {
        type: Number,
        required: true,
    },
});

const Employee = model("a1-employee", employeeSchema);

export default Employee;
