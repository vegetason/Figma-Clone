const dotenv=require('dotenv')
dotenv.config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  },
  test: {
    username: 'your_username',
    password: 'your_password',
    database: 'your_test_db',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    username: 'your_username',
    password: 'your_password',
    database: 'your_prod_db',
    host: '127.0.0.1',
    dialect: 'postgres'
  }
};
