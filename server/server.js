const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
const { ApolloServer } = require('apollo-server-express');

//TypeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');



const PORT = process.env.PORT || 3001;
// create new ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers
});
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Create new instance of Apollo Server
const startApolloServer = async(typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app })

  db.once('open',()=>{
    app.listen(PORT, () => {
      console.log(`API server running on ${PORT}!`)
      console.log(`Use GraphQl at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
};

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

//app.use(routes);

//start server
startApolloServer(typeDefs,resolvers);
