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

  type Mutation {
    createProduct(
      name: String!,
      description: String,
      quantity: Float,
      price: Float,
    ): Product!
  }
`;
