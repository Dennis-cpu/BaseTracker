const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "fransolina",
    database: "BaseTrackerDB"
})

module.exports = client