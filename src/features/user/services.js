const db = require('../../_db/models')

module.exports = {
    create: payload => db.User.create(payload),
    list: payload => db.User.list(payload)
}