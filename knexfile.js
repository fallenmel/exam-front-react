const { connnection } = require('./src/config/connection');

// Update with your config settings.
require('dotenv').config();


module.exports = {
  development: {
    client: 'mysql',
    connection: connnection,
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'mysql',
    connection: connnection,
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
