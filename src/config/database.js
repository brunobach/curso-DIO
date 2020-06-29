import mongoose from 'mongoose';

const database = mongoose.connect('mongodb+srv://dbUser:dbPass@clusterbruno-hbzd9.mongodb.net/curso-dio?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

export default database
