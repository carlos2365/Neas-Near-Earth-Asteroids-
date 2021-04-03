import { Shema, model} from 'mongoose'

const rolShema = new Shema({
    name: String

}, {
    versionKey: false
})
export default model('Role', rolShema);