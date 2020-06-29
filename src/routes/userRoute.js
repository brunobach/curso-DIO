import Joi from 'joi'

import UserModel from '../models/userModel'
import UserController from '../controllers/userController'

const usersController = new UserController(UserModel)

const userRoute = (server) => {
    server.route({
        method: 'GET',
        path: '/users/{id?}',
        handler: (request, h) => usersController.find(request, h)
    })

    server.route({
        method: 'POST',
        path: '/users/',
        handler: (request, h) => usersController.create(request, h),
        options: {
            validate: {
                payload: {
                    firstName: Joi.string().required(),
                    lastName: Joi.string().required(),
                    email: Joi.string().email().required()
                }
            }
        }
    })

    server.route({
        method: 'PUT',
        path: '/users/{id}',
        handler: (request, h) => usersController.update(request, h),
        options: {
            validate: {
                payload: {
                    firstName: Joi.string(),
                    lastName: Joi.string(),
                    email: Joi.string().email()
                }
            }
        }
    })
}

export default userRoute



