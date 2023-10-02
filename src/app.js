import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import router from './routers/index.js'
import errorHandler from './middlewares/error.middleware.js'


dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
app.use(router)
app.use(errorHandler)

const PORT = 5000
app.listen(5000, () => console.log(`Rodando na ${PORT}`))
