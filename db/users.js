import { Schema, connect, model } from 'mongoose';

connect('mongodb://localhost/shopeedb');

const schema = new Schema({
  name: String,
  email: String,
  password: String,
});

const Users = model('Users', schema);

export default Users;
