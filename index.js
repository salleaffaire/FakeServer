const express = require('express')
const app = express()

app.use(express.json())

app.put('/fake', (req, res) => {
  console.log(req.body)
  res.send('Got a PUT Request')
})

app.listen(4000, () => console.log('Fake app listening on port 4000!'))
