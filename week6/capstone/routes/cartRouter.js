import express from 'express'
import Cart from '../models/cart.js'
import CartItem from '../models/cartItem.js'

const cartRouter = express.Router()

cartRouter.route('/')
    .get((req, res, next) => {
        Cart.findOne({ user: req.user._id, active: true}, (err, cart) => {
            if (err) {
                res.status(500)
                return next(err)
            }

            if(cart) {
                return res.status(201).send(cart)
            }

            req.body.user = req.user._id
            req.body.date = new Date()
            req.body.active = true

            const newCart = new Cart(req.body)

            newCart.save((err, savedCart) => {
                if (err) {
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(savedCart)
            })
        })
    })

cartRouter.route('/items/:cartId')
    .get((req, res, next) => {
        CartItem.find({ cart: req.params.cartId}, (err, items) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(items)
        })
    })

cartRouter.route('/add/:cartId')
    .post((req, res, next) => {
        const newCartItem = new CartItem({
            cart: req.params.cartId,
            category: req.body.category, 
            item: req.body.item,
            description: req.body.description,
            price: req.body.price
        })

        newCartItem.save((err, savedItem) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedItem)
        })
    })

export default cartRouter
