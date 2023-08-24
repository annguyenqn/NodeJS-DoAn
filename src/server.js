import express from "express"
import bodyParser from "body-parser"
import viewEngine from "./config/viewEngine"
import initWebRoutes from "./route/web"
import connectDb from "./config/connectDb"

require('dotenv').config()
let app = express()

//config app
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


viewEngine(app)
initWebRoutes(app)

connectDb()
let port = process.env.PORT || 6969
app.listen(port, () => {
    console.log('back end running on' + port)
})