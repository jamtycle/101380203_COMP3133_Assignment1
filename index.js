import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import fs from "fs";

import { MongoInit } from "./data/index.js";
import Resolvers from "./resolvers/index.js";

import dotenv from "dotenv";

dotenv.config();

const dbstatus = await MongoInit();
if (!dbstatus) {
    console.error("Error connecting to MongoDB");
    process.exit(1);
}

const typeDefs = fs.readFileSync("./schema.graphql", "utf-8");

const server = new ApolloServer({
    typeDefs,
    resolvers: Resolvers,
});

const port = process.env.PORT || 4000;
const host = process.env.HOST || "localhost";
const { url } = await startStandaloneServer(server, {
    listen: { port, host },
});

console.log(`🚀  Server ready at: ${url}`);
