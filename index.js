const express = require('express')
const dotenv = require('dotenv')




const path = require('path')
const bodyParser = require('body-parser')

const generalRoutes = require('./routes/generalRoutes')
const userRoutes = require('./routes/userRoutes')
const adminRoutes = require('./routes/adminRoutes')
dotenv.config()
const port = process.env.PORT || 9000

const fave = express()

fave.use(bodyParser.urlencoded({extended:false}))


fave.use('/', generalRoutes);
 fave.use('/account', userRoutes);
 fave.use('/admin', adminRoutes);
fave.use(express.static('public'))

// fave.use(express.static('pages'))

fave.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'pages', 'home.html'))
})
fave.get('/register', (req,res)=>{
    res.sendFile(path.join(__dirname, 'pages', 'register.html'))
})


   
    
    fave.get('*', (req,res)=>{
        res.sendFile(path.join(__dirname, 'pages', 'NoPage.html'))
    })
    
    
fave.listen(port,console.log("server started at port " + port))



