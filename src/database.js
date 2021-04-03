import mongoose from 'mongoose'

mongoose.connect("mongodb://localhost/neasdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
})


.then(db => console.log('db connected'))
.catch(error => console.log('error'))