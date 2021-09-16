const tableName = 'users';

exports.up = function (knex) {
  console.log('tableName', tableName);
  return knex.schema.createTable(tableName, function (table) {
    table.increments();
    table.string('name');
    table.string('email').unique();
    table.string('password');
    table.timestamps(true, true);
  })

};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
