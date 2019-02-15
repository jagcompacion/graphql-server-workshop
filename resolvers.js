import Products from './products';

const formatResponse = item => ({
  id: item._id.toString(), //eslint-disable-line
  name: item.name,
  description: item.description,
  quantity: item.quantity,
  price: item.price,
});

export default {
  Query: {
    products: async () => {
      const products = await Products.find({});
      return products.map(item => (formatResponse(item)));
    },
  },
  Mutation: {
    createProduct: async (parent, args) => {
      const product = await new Products(args).save();
      return formatResponse(product);
    },
  },
};
