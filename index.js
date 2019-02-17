import { ApolloServer } from 'apollo-server';
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from './constants';

import typeDefs from './typeDefs';
import resolvers from './resolvers';

const getUser = (token) => {
  if (token) {
    const decoded = jwt.verify(token, SECRET_KEY);
    if (decoded) return decoded;
  }
  return null;
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    const user = getUser(token);
    return { user };
  },
});

const PORT = 4000;

server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
