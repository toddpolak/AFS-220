import express from 'express'
import Drink from '../models/drink.js'

const drinkRouter = express.Router()

drinkRouter.route('/')
    .get((req, res, next) => {
        Drink.find((err, items) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(items)
        })
    })

export default drinkRouter
