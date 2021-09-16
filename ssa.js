const express = require('express')
const router = express.Router()

module.exports = router

router.get('/', (req,res) => {
   res.send({
      name: 'SSA',
      working: 'true'
   })
})

router.get('/calendar', (req,res) => {
    fetch('calendar.txt')
    .then(response => response.text())
    .then(data => {
        // Do something with your data
        console.log(data);
    });
})

router.get('/site', (req,res) => {
    const request = require('request');
    request('http://www.stratfordschoolacademy.com', function (error, response, body) {
     res.send({
          info: 'Status on the SSA website',
          status: response.statusCode,
          working: 'true'
      })
    }); 
})

router.get('/onedrive', (req,res) => {
    res.send({
        url: 'https://stratfordsa-my.sharepoint.com/'
    })
})

