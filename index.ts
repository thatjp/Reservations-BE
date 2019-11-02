const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const { ApolloServer, gql } = require('apollo-server-express');
const connectDB = require('./config/db');
const { typeDefs, resolvers } = require('./src/schema');

dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true
});

server.applyMiddleware({ app });

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`)
)

process.on('unhandledRejection', (err: any, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});