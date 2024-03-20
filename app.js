const express = require('express')
const publicationRoutes = require('./routes/publications.js')
const connectDB = require('./db/connect.js')
require('dotenv').config()
const Publication = require('./models/Publication.js')
const http = require('http');
const WebSocket = require('ws')
const cors = require('cors')

const app = express()
const server = http.createServer(app)
const wss = new WebSocket.Server({ server: server });


app.use(express.json())
app.use(cors())

app.use('/api/publications', publicationRoutes)

const start = () => {
    try {
        connectDB(process.env.MONGO_URI)
        server.listen(5000, () => console.log('app listening'))

        wss.on('connection', (ws) => {
            console.log('a new client connected')
            ws.send('welcome from ws server')
            
            Publication.watch().on('change', data => {
                ws.send(data.operationType)
            })
        });

    } catch (error) {
        console.log(error)
    }
}

start()