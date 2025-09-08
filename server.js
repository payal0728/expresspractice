const express = require('express')


const app = express()


app.get('/', (req,res) => {
    res.send('Hello World!...')
})

app.get('/about', (req,res) =>{
    res.send('This is about page')
})

app.get('/contactUs', (req,res) =>{
    res.send('Contact Us')
})





app.listen(5000, ()=> console.log('server started'))



// http://localhost:5000/
// http://localhost:5000/about
// http://localhost:5000/contactUs