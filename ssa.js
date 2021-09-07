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
    function download(link) {
        var element = document.createElement('a');
        element.setAttribute('href', link);
      
        element.style.display = 'none';
        document.body.appendChild(element);
      
        element.click();
      
        document.body.removeChild(element);
      }
})

