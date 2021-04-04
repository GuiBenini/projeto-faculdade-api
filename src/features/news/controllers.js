const Boom = require('boom')
const Validator = require('fastest-validator')

const services = require('./services')

const v = new Validator()

module.exports = {
    create: async ctx => {
        const { request:{body},response } = ctx
        const schema = {
            titulo: { max: 80, min: 0, type: 'string' },
            subtitulo: { max: 255, min: 0, type: 'string' },
            texto: { max: 1000, min: 0, type: 'string' },
            link: { max: 255, min: 2, type: 'string' },
            foto: { max: 255, min: 2, type: 'string' }
        }
        const errors = v.validate(body, schema)

        if (Array.isArray(errors) && errors.length) {
            response.status = 400
            return response.body = Boom.badRequest(null, errors)
        }

        const news = await services.create(body)
        response.body = news        
    },
    
}