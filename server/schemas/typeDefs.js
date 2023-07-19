const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    orders: [Order]!
  }

  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    quantity: Int
    name: String
    description: String
    category: Category
    price: Float
    productImage: String 
  }

  type Order {
    _id: ID
    products: [Product]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    products: [Product]
    product(productId: ID!): Product
    orders: [Order]
    order(orderId: ID!): Order
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addProduct(name: String!, description: String!, price: Float!, quantity: Int!): Product
    updateProduct(productId: ID!, name: String, description: String, price: Float, quantity: Int): Product
    deleteProduct(productId: ID!): Product
    createOrder(productId: ID!, quantity: Int!): Order
    deleteOrder(orderId: ID!): Order
  }
`;

module.exports = typeDefs;
