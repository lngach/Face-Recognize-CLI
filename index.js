// import lib
const express = require('express')

// init app
const app = express()

// apply middleware
// -- body-parser
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// -- apply pug template engine
app.set('views', __dirname + '/src/views')
app.set('view engine', 'pug')

// -- apply static files
app.use(express.static(__dirname + '/src/public'))

// -- routers
const mainRouter = require('./src/routes/index')
app.use('/', mainRouter)

const authRouter = require('./src/routes/auth')
app.use('/auth', authRouter)

app.listen(3000, () => console.log('Server is running on port 3000'))