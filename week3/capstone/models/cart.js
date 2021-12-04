import mongoose from 'mongoose'

const Schema = mongoose.Schema

const cartSchema = new Schema({
    foodItem : {
        type: Schema.Types.ObjectId,
        ref: "Food",
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

export default mongoose.model('Cart', cartSchema)