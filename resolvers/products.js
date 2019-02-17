import { AuthenticationError } from 'apollo-server';
import Products from '../db/products';

const formatResponse = item => ({
  id: item._id.toString(), //eslint-disable-line
  name: item.name,
  description: item.description,
  quantity: item.quantity,
  price: item.price,
});

export default {
  Query: {
    products: async (parent, args, context) => {
      if (!context.user) throw new AuthenticationError('Must authenticate');
      const products = await Products.find({});
      return products.map(item => (formatResponse(item)));
    },
  },
  Mutation: {
    createProduct: async (parent, args, context) => {
      if (!context.user) throw new AuthenticationError('Must authenticate');
      const product = await new Products(args).save();
      return formatResponse(product);
    },
    updateProduct: async (parent, args, context) => {
      if (!context.user) throw new AuthenticationError('Must authenticate');
      const product = await Products.findOneAndUpdate({ _id: args.id }, args.input, { new: true });
      return formatResponse(product);
    },
    deleteProduct: async (parent, args, context) => {
      if (!context.user) throw new AuthenticationError('Must authenticate');
      const product = await Products.findOneAndDelete({ _id: args.id });
      if (product) return true;
      return false;
    },
  },
};
