require('dotenv').config();

const connnection = {
  host: process.env.REACT_APP_DB_HOST || '127.0.0.1',
  user: process.env.REACT_APP_DB_USER,
  port: process.env.REACT_APP_DB_PORT || 3306,
  password: process.env.REACT_APP_DB_PASSWORD,
  database: process.env.REACT_APP_DB_NAME,
  charset: 'utf8',
};


module.exports.connnection = connnection;
