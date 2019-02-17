import { mergeTypes } from 'merge-graphql-schemas';

import products from './products';
import users from './users';

const typeDefs = [
  products,
  users,
];

export default mergeTypes(typeDefs, { all: true });
