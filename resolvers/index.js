import { mergeResolvers } from 'merge-graphql-schemas';
import products from './products';
import users from './users';

const resolvers = [
  products,
  users,
];

export default mergeResolvers(resolvers);
