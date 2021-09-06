const express = require('express')
const router = express.Router()
const { Canvas }  = require('canvas-constructor/skia')
const canvas = require('canvas')


module.exports = router

router.get('/', (req, res) => {
   res.send({
       id: '1',
       name: 'sup',
       description: 'idk its pretty cool',
       success: 'True',
       image: 'https://phoneguyapi.herokuapp.com/images/ccdcfa43f45fd89ee17f68f9b91a2b21.jpg'
   })

})   
