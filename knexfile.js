// Update with your config settings.
// require("dotenv").load()

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: "galvanize-reads"
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
