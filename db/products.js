import { Schema, connect, model } from 'mongoose';

connect('mongodb://localhost/shopeedb');

const schema = new Schema({
  name: String,
  description: String,
  price: Number,
  quantity: Number,
});

const Products = model('Products', schema);

export default Products;
