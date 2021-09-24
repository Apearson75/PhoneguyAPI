const { response } = require('express');
const express = require('express')
const router = express.Router()
const request = require('request')
var Twit = require('twit')
module.exports = router

var T = new Twit({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  });

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
    
    request('http://www.stratfordschoolacademy.com', function (error, response, body) {
     res.send({
          info: 'Status on the SSA website',
          status: response.statusCode,
          working: 'true'
      })
    }); 
})

router.get('/sharepoint', (req,res) => {
    res.send({
        url: 'https://stratfordsa-my.sharepoint.com/'
    })
})

router.get('/remote', (req,res) => {
    res.send({
        url: 'https://remote.stratfordschoolacademy.org/RDWeb/webclient/'
    })
})

router.get('/latesttweet', (req,res) => {
    var params = {screen_name: 'StratfordSch', count: '1'}
    T.get('statuses/user_timeline',params, function(err, data, response) {
    res.send({
        data
    })
  })
})
   
