const db = require('../../_db/models')

module.exports = {
    create: payload => db.News.create(payload)
    //list: payload => db.Provider.findAll({ where: payload })
}