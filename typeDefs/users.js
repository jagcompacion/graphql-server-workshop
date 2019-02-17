import { gql } from 'apollo-server';

export default gql`
  type User {
    id: String!
    name: String!
    email: String!
  }

  type Query {
    me: User!
  }

  input UserInput {
    name: String!
    email: String!
    password: String!
  }

  type Mutation {
    register(
      name: String!,
      email: String!,
      password: String!,
    ): User!
    login(
      email: String!,
      password: String!,
    ): String!
  }
`;
