const config = require('../config/mysql')
const knex = require('knex')({
    client: 'mysql2',
    connection: config
})

const createUser = async (user) => {
    const result = await knex('users').insert(user)

    return result
}

const getUsers = async () => {
    const users = await knex.select().table('users')

    return users
}

module.exports = {
    createUser,
    getUsers
}