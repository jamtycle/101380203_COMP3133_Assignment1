import { User } from "../data/index.js";

const UserResolvers = {
    Query: {
        async login(_, { username, password }) {
            // console.log(username, password);
            const user = await User.findOne({ username });
            if (user && user.password === password) {
                return user;
            }
            return null;
        },
    },
    Mutation: {
        async signup(_, { user }) {
            const nuser = new User({
                username: user.username,
                email: user.email,
                password: user.password,
            });
            try {
                await nuser.save();
                return nuser;
            } catch (ex) {
                return ex;
            }
        },
    },
};

export default UserResolvers;
