const controllers = require('./controllers')

module.exports = router => {
    router.post('/v1/api/provider', controllers.create),
    router.get('/v1/api/provider/list', controllers.findAll)
}