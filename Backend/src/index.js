const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const app = express()
const port = process.env.PORT || 3001

app.get('/', (req, res) => {
    res.render('Birds home page')
  })

app.listen(port, () => {
    console.log('Server running' + port)
})