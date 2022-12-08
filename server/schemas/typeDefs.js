const { gql } = require('apollo-server-express');

//My TypeDefs
const typeDefs = gql`
type Query {
    helloWorld: String
}

`;

module.exports = typeDefs;