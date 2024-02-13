import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import fs from "fs";

import { MongoInit } from "./data/index.js";
import Resolvers from "./resolvers/index.js";

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

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);