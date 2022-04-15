import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import memoRoutes from './route/memo.js'

const app = express()
dotenv.config()

app.use(bodyParser.json())
app.use(cors())

app.use('/memos', memoRoutes)
app.get('/', (req, res)=>{res.send('Welcome')})

const PORT = process.env.PORT||5000
mongoose.connect(process.env.CONNECTION_URL)
   .then(()=>app.listen(PORT, ()=>console.log(`localhost: ${PORT}`)))
   .catch((error)=>console.log(error.message))