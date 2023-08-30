const express = require('express')
const app = express()
const port = 3010

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/env', (req, res) => {
  res.send(JSON.stringify(process.env))
})

app.get('/env2', (req, res) => {
  res.send(JSON.stringify(process.env))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})