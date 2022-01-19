import mongoose from 'mongoose'

const Schema = mongoose.Schema

const cartSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    }
})

export default mongoose.model('Cart', cartSchema)