const   express  = require('express')
const  { Router }  = require('express')

const router = express.Router();

router.post('/createaccount', (req,res)=>{
    res.send('Account created successfully')
})

router.get('/dashboard', (req,res)=>{
    res.send('user dashboard')
})


router.get('agentlist', (req,res)=>{
    res.send('Agent list')
})


module.exports = router