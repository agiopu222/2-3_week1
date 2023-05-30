const express = require('express')
const app = express()
const port = 3000

// require handlebars in the projectss
const exphbs =  require('express-handlebars')

//setting handlebars engine
app.engine('.handlebars', exphbs.engine({defaultLayout: false}));
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// routes setting
app.get('/', (req, res) => {
    res.render('index')
})

// start and listen on the express server
app.listen (port, () => {
    console.log(`Express is listening on http://localhost: ${port}`)
})