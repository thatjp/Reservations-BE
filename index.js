"use strict";
var express = require('express');
var dotenv = require('dotenv');
var bodyParser = require('body-parser');
var _a = require('apollo-server-express'), ApolloServer = _a.ApolloServer, gql = _a.gql;
var connectDB = require('./config/db');
var _b = require('./src/schema'), typeDefs = _b.typeDefs, resolvers = _b.resolvers;
dotenv.config({ path: './config/config.env' });
connectDB();
var app = express();
var server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
});
server.applyMiddleware({ app: app });
app.listen(process.env.PORT || 5000);
process.on('unhandledRejection', function (err, promise) {
    console.log("Error: " + err.message);
    server.close(function () { return process.exit(1); });
});
