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
       success: 'True'
   })

})   
