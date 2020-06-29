import Boom from 'boom'

class UsersController {

    constructor(Users){
        this.Users = Users
    }
    async find(request){
        const {id} = request.params
        const query = {}

        if(id){
            query._id = id
        }

        try {
            const users = await this.Users.find(query)
            return { users }
        } catch (e) {
            return Boom.badRequest('Failed to find user')            
        }
    }
    
    async create(request, h, er) {

        try {
            const user = new this.Users(request.payload)
            await user.save()
            return h.response().code(201)
        } catch (e) {
            return Boom.badRequest(e)
        }
    }

    async update(request, h){
        const {id} = request.params

        try {
            const updateUser = await this.Users.findOneAndUpdate({_id : id}, request.payload, {
                new: true
            })
            if(updateUser){
                return h.response().code(200)
            }
            return Boom.badRequest('Could not update the user')
        } catch (e) {
            return Boom.badRequest(e)
        }
    }
}

export default UsersController