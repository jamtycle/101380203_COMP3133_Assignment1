import { Employee } from "../data/index.js";
import { Types } from "mongoose";

const EmployeeResolvers = {
    Query: {
        async getAllEmployees() {
            return await Employee.find();
        },
        async getEmployeeById(_, { _id }) {
            // console.log(_id);
            return await Employee.findById(_id);
        },
    },
    Mutation: {
        async addEmployee(_, { employee }) {
            if (!employee) return new Error("No employee data");

            try {
                const nemployee = new Employee({
                    first_name: employee.first_name,
                    last_name: employee.last_name,
                    email: employee.email,
                    gender: employee.gender,
                    salary: employee.salary,
                });
                await nemployee.save();
                return nemployee;
            } catch (ex) {
                return ex;
            }
        },
        async updateEmployee(_, { _id, employee }) {
            const uempl = {
                $set: {
                    first_name: employee.first_name,
                    last_name: employee.last_name,
                    email: employee.email,
                    gender: employee.gender,
                    salary: employee.salary,
                },
            };
            try {
                const oid = new Types.ObjectId(_id);
                const upt = await Employee.updateOne({ _id: oid }, uempl);
                console.log(upt);
                return await Employee.findById(oid);
            } catch (ex) {
                return ex;
            }
        },
        async deleteEmployee(_, { _id }) {
            try {
                const oid = new Types.ObjectId(_id);
                await Employee.deleteOne({ _id: oid });
                return true;
            } catch (ex) {
                console.error(ex);
                return false;
            }
        },
    },
};

export default EmployeeResolvers;
