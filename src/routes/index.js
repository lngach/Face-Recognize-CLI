const express = require('express')
const axios = require('axios')
const multer = require('multer')
const FormData = require('form-data')
const fs = require('fs')
const upload = multer()
const router = express.Router()

router.use(timeLog = (req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', (req, res) => res.render('index'))

router.post('/auto-detect', (req, res) => {

})

router.post('/manual-detect', upload.array('file'), (req, res) => {
    let name = req.body.name
    let files = req.files
    let formdata = new FormData()
    files.forEach(file => {
        formdata.append('file', JSON.stringify(file))
    })
    formdata.append('name', name)
    axios.post('http://52.221.184.144:6969/upload_faces', formdata)
        .then(response => {
            res.send(response.data)
        })
        .catch(err => res.send(err.message))
})

module.exports = router