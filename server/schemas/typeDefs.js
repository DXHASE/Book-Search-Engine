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

input InputBooks {
    bookId: ID
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}

type Mutation {
    addUser(username: String!, email: String! , password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(newBook: InputBooks): User
    removeBook(bookId: ID!): User
}

type Query {
    me: User
}

`;

module.exports = typeDefs;