const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public/assets'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.redirect('dashboard/login')
})

const dashboardRouter = require('./routes/dashboard')

app.use('/dashboard', dashboardRouter)

//app.listen(3000)