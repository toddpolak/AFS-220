import mongoose from 'mongoose'

const Schema = mongoose.Schema

const cartItemSchema = new Schema({
    cart: {
        type: Schema.Types.ObjectId,
        ref: "Cart",
        required: true
    },
    category: {
        type: String,
    },
    item: {
        type: String,
    },
    description: {
        type: String
    },
    price: {
        type: Number
    }
})

export default mongoose.model('CartItem', cartItemSchema)