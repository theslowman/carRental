// Update with your config settings.

module.exports = {

    development: {
        client: 'mysql',
        connection: {
            database: 'cars_db',
            user: 'admin',
            password: 'admin',
            host: '127.0.0.1'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },

    staging: {
        client: 'mysql',
        connection: {
            database: 'cars_db',
            user: 'admin',
            password: 'admin',
            host: '127.0.0.1'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },

    production: {
        client: 'mysql',
        connection: {
            database: 'cars_db',
            user: 'admin',
            password: 'admin',
            host: '127.0.0.1'
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
