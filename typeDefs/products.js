import { gql } from 'apollo-server';

export default gql`
  type Product {
    id: String!
    name: String!
    description: String
    quantity: Float
    price: Float
  }

  type Query {
    products: [Product!]!
  }

  input ProductInput {
    name: String!
    description: String
    quantity: Float
    price: Float
  }

  type Mutation {
    createProduct(
      name: String!,
      description: String,
      quantity: Float,
      price: Float,
    ): Product!
    updateProduct(
      id: ID!,
      input: ProductInput!
    ): Product!
    deleteProduct(
      id: ID!
    ): Boolean!
  }
`;
