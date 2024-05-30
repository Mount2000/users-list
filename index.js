const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const router = require('./routes/user.routes')

const port = 3000

app.set('view engine', 'pug')
app.set('views', './views')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/users', router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })