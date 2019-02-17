import jwt from 'jsonwebtoken';
import { AuthenticationError } from 'apollo-server';
import Users from '../db/users';
import { SECRET_KEY } from '../constants';

const formatResponse = item => ({
  id: item._id.toString(), //eslint-disable-line
  name: item.name,
  email: item.email,
});

export default {
  Query: {
    me: async (parent, args, context) => {
      if (!context.user) throw new AuthenticationError('Must authenticate');
      const found = await Users.findOne({ _id: context.user.id });
      return formatResponse(found);
    },
  },
  Mutation: {
    register: async (parent, args) => {
      const user = await new Users(args).save();
      return formatResponse(user);
    },
    login: async (parent, args) => {
      const found = await Users.findOne({ email: args.email, password: args.password });
      if (found) {
        const user = {
          id: found._id, // eslint-disable-line
          email: found.email,
        };
        const token = jwt.sign(user, SECRET_KEY);
        return token;
      }
      throw new AuthenticationError('Incorrect username/password');
    },
  },
};
