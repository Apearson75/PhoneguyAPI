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
      console.error('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      res.send({
          status: response.statusCode
      })
    }); 
})

