const express = require('express')
const api_helper = require('./API_helper')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('API to get all Cars information')
})

app.get('/cars', (req, res) => {
//  res.send('Find all cars')
//api_helper.make_API_call('http://localhost:8080/car')
api_helper.make_API_call('http://localhost:8081/cars')
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    })
})

app.get('/cars/:id', (req, res) => {
 var carid = req.params.id;
 //var url = 'http://localhost:8080/car/'+carid;
 var url = 'http://localhost:8081/cars/'+carid;
 console.log(url);
api_helper.make_API_call(url)
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})