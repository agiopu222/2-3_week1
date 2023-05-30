// include express
const express = require('express')
const app = express()

// define server related variables
const port = 3000

// setting the route and corresponding response
// localhost:3000/
app.get('/', (req, res) => {
    res.send('This is my first express web app app.')
})

// listen and start the server
app.listen(port, () => {
    console.log(`express is running on http://localhost:${port}`)
})