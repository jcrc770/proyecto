import express from 'express'
import dotenv from 'dotenv'
// import errorHandler from './middlewares/errorHandler.js'
// import rateLimitMiddleware from './middlewares/rateLimit.js'
import routes from './Routes/index.js'
import cors from 'cors'

const corsOptions ={
    origin : process.env.FRONTEND_URL || '*',
    optionSuccesStatus :200
}
dotenv.config()


const app = express()
app.use(express.json()) 
// app.use(rateLimitMiddleware)
app.use(cors(corsOptions))
app.use('/api/v1',routes)
// app.use (errorHandler)

const PORT = process.env.PORT || 3020

app.listen(PORT,()=>{
    console.log( `🔥🔥🔥🔥 SERVIDOR TRABAJANDO EN ${PORT}🔥🔥🔥🔥`)
})