// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

    type Thought {
        _id: ID
        thoughtText: String
        createdAt: String
        username: String
        reactionCount: Int
        reactions: [Reaction]
    }

    type Reaction {
        _id: ID
        reactionBody: String
        createdAt: String
        username: String
    }

    type User {
        _id: ID
        username: String
        email: String
        friendCount: Int
        thoughts: [Thought]
        friends: [User]
    }

    type Query {
        users: [User]
        user(username: String!): User
        thoughts(username: String): [Thought]
        thought(_id: ID!): Thought
    }

`;

// thoughts: [Thought] would return everything but when we define username: String in parentheses for the thoughts query, we are defining that this query COULD receive a parameter IF we wanted it to. This has to also be defined in the resolvers.

// "type Query" lists the types of queries that can be run and what they return

// export the typeDefs
module.exports = typeDefs;