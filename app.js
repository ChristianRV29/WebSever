const express = require('express')
const hbs = require('hbs')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT

hbs.registerPartials(__dirname + '/views/partials', (err) => {
  if (err) console.log('Error loading partials: ', err)
})

app.set('view engine', 'hbs')
// Static content
app.use(express.static('public'))

app.get('/', (_, res) => {
  res.render('home', {
    name: 'Christian Riano',
    title: 'NodeJS WebServer course'
  })
})

app.get('/generic', (_, res) => {
  res.render('generic', {
    title: 'Generic'
  })
})

app.get('/elements', (_, res) => {
  res.render('elements', {
    title: 'Elements'
  })
})

app.get('*', (_, res) => {
  res.sendFile(`${__dirname}/public/404.html`)
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
