const Boom = require('boom')
const Validator = require('fastest-validator')

const services = require('./services')

const v = new Validator()

module.exports = {
    create: async ctx => {
        const { request:{body},response } = ctx
        const schema = {
            name: { max: 60, min: 1, type: 'string' },
            cnpj: { max: 14, min: 14, type: 'string' },
            endereco: { max: 255, min: 5, type: 'string' },
            telefone: { max: 18, min: 8, type: 'string' }
        }
        const errors = v.validate(body, schema)

        if (Array.isArray(errors) && errors.length) {
            response.status = 400
            return response.body = Boom.badRequest(null, errors)
        }

        const provider = await services.create(body)
        response.body = provider        
    },
    
    findAll: async ctx =>{ 
        const { request:{body}, response } = ctx


        const user = await services.findAll(body)
//        console.log(user)
        if(user){
            response.body={
                result: jwt.sign({email:user.email}, 'segredo')
            }
            //jwt.verify(token, 'segredo')
        }else{
            response.status = 401
            response.body = {result: Boom.unauthorized()}
        }
    }
}