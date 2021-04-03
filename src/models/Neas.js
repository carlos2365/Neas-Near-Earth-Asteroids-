import {Schema, model} from 'mongoose'

const  neaSchema = new Schema({
    full_name: String,
    a: Number,
    e: Number,
    i: Number,
    om: Number,
    w: Number,
    ma: Number
}, {
    timestamps: true,
    versionKey: false    
})
export default model('Neas', neaSchema)