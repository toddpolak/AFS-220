import mongoose from 'mongoose'

const Schema = mongoose.Schema

const drinkSchema = new Schema({
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
    },
    image: {
        type: String
    }
})

export default mongoose.model('Drink', drinkSchema)
