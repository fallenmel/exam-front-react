const connnection = require('./connection').connnection;
const knex = require('knex')({
  client: process.env.REACT_APP_DB_CLIENT,
  connection: connnection,
});

module.exports.knex = knex;