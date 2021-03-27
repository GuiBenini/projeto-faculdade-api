const controllers = require('./controllers')

module.exports = router => {
    router.post('/v1/api/user', controllers.create),
    router.post('/v1/api/user/list', controllers.list)
}