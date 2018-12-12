const express = require('express')
const Pusher  = require('pusher')
const router = express.Router()

// -- session
const pusher = new Pusher({
    appId: '',
    key: '',
    secret: '',
    cluster: '',
    encrypted: true
})

router.get('/signin', (req, res) => {
    let socketId = req.body.socket_id
    let channel = req.body.channel_name
    let payload = {
        user_id: Math.random.toString(36).slice(2) + Date.now()
    }
    let auth = pusher.authenticate(socketId, channel, payload)
    res.send(auth)
})

module.exports = router