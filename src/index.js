import Hapi from 'hapi'

import database from './config/database'
import userRoute from './routes/userRoute'

const port = 3000

const server = Hapi.Server({
    host: 'localhost',
    port,
    routes: {
        json: {
            space: 4
        }
    }
})

userRoute(server)

server.route({
    method: 'GET',
    path: '/',
    handler: () => 'Hello World from Hapi!'
})

database.then(_ => {
    try {
        server.start()
    } catch (e) {
        console.log(e)
    }
    console.log('Server running!')
})
.catch(e => {
    console.log(e)
})



