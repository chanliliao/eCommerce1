import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'bob',
    email: 'bob@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'john',
    email: 'john@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Henry Liao',
    email: 'cliao119@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
];

export default bcrypt;
