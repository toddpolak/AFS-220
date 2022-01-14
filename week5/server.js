import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import expressJwt from 'express-jwt'
import dotenv from 'dotenv'
import authRouter from './routes/authRouter.js'
import foodRouter from './routes/foodRouter.js'
import cartRouter from './routes/cartRouter.js'

const app = express()

app.use('/', express.json())
app.use(morgan('dev'))

dotenv.config()

async function main() {
    await mongoose.connect('mongodb://localhost:27017/capstone')
    console.log("Connected to MongoDB")
}

main().catch(err=>console.log(err))

// Routes
app.use('/auth', authRouter)
app.use('/food', foodRouter)
app.use('/cart', cartRouter)
app.use('/api', expressJwt({ secret: process.env.SECRET, algorithms: ['HS256'] })) //req.user
//app.use('/api/cart', cartRouter)

// Error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({ errMsg: err.message })
})

app.listen(9000, ()=>{
    console.log("The App is listening on port 9000!")
})
