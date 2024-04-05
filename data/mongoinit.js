import { connect, set } from "mongoose";

/**
 *
 * @returns {Promise<boolean>} true if the connection was successful, false otherwise
 */
const MongoInit = async () =>
    connect(
        process.env.MONGODB_URI,
        {
            useNewUrlParser: true,
            dbName: "full-stack",
        },
    )
        .then(() => {
            set("toJSON", { useProjection: true });
            set("toObject", { useProjection: true });
            return true;
        })
        .catch((error) => {
            console.error("Error connecting to MongoDB:", error);
            return false;
        });

export default MongoInit;
