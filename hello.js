const express = require('express')
const router = express.Router()
const { Canvas }  = require('canvas-constructor/skia')
const canvas = require('canvas')


module.exports = router, canvas, Canvas

router.get('/', (req, res) => {
  res.status(200).send({
     name: 'sup'
  })
})


router.get('/:id', (req, res) => {
  res.send({
     name: req.params.id
  })
})

