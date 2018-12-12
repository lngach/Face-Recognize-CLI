const express = require('express')
const router = express.Router()

router.use(timeLog = (req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', (req, res) => res.render('index'))

router.post('/auto-detect', (req, res) => {

})
router.post('/manual-detect', (req, res) => {

})

module.exports = router