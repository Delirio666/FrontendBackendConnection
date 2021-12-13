var express = require('express')
var app = express()
var routes = require('./routes')
var PORT = 3001

app.use(routes)
app.use(express.json())

app.listen(PORT,()=>console.log(`Listening on port:`, PORT))
