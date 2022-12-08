const { gql } = require('apollo-server-express');

//My TypeDefs
const typeDefs = gql`

type User{
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Books]
}

type Books{
    bookId: ID!
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
}

`;

module.exports = typeDefs;