const { urlencoded } = require('express')
const express = require('express')
const morgan = require('morgan')
const db = require('./database')
const Employee = require('./models/Employee')
const cors = require('cors')
//INICIALIZACIONES
const app = express()

//SETTING
app.set('port', process.env.PORT || 3000)
db.authenticate()
    .then( () => console.log('Base de datos conectada'))
    .catch(error => console.log(error)) 
db.sync()
//MIDDLEWARES

app.use(cors({origin: 'http://localhost:4200'}))
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended:false }))

//ROUTES
app.use(require('./routes/employees'))

//STATIC FILES

module.exports = app