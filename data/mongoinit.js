import { connect, set } from "mongoose";

/**
 *
 * @returns {Promise<boolean>} true if the connection was successful, false otherwise
 */
const MongoInit = async () =>
    connect(
        "mongodb+srv://bramirez:xBu1RW4CroY5KUQp@fstack2.gepbzac.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
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
