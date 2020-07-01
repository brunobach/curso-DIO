import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()


const database = mongoose.connect(`mongodb+srv://${process.env.USUARIO}:${process.env.SENHA}${process.env.DATABASE_NAME}?retryWrites=true&w=majority`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

export default database
