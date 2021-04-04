const authRoutes = require('../features/auth/routes')
const userRoutes = require('../features/user/routes')
const providerRoutes = require('../features/provider/routes')
const newsRoutes = require('../features/news/routes')

module.exports = router => {
    authRoutes(router)
    userRoutes(router)
    providerRoutes(router)
    newsRoutes(router)
}