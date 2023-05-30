const express = require('express')
const router = express.Router()

router.use(express.static('public/assets'))

router.get('/main', (req, res) => {
    res.render('dashboard/index', { name: user, userName: generateUsername(user) })
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.post('/',(req, res) => {
    user = req.body.name
    res.redirect('dashboard/main')
})

let user;

function generateUsername(name) {
    let username = name.toLowerCase();
    return username = `@${username.replace(/\s/g, '')}`
}

module.exports = router