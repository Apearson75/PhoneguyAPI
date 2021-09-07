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
    fetch('calendar.html')
    .then(response => response.text())
    .then(data => {
        // Do something with your data
        console.log(data);
    });
})

