// Update with your config settings.
module.exports = {
    development: {
        client: 'pg',
        connection: 'postgres://localhost/allfeet',
        debug: true,
        pool: {
            min: 1,
            max: 2
        }
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL
    }
};
