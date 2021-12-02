import express from 'express'
import Food from '../models/food.js'

const foodRouter = express.Router()

foodRouter.route('/')
    .get((req, res, next) => {
        Food.find((err, items) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(items)
        })
    })

export default foodRouter