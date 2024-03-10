const express = require('express');
const users = require('./MOCK_DATA.json')
const fs = require('fs');
const {dbConnection} = require('./connection')

const app = express()
const PORT = '8002';
dbConnection()
app.listen(PORT, ()=> console.log(`Listening Port ${PORT} `))

//Connect db


app.use(express.urlencoded({extended: false}));



