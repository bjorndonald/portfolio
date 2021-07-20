const express = require('express')

const app = express()

const port = process.env.PORT || 5000
const root = require('path').join(__dirname, 'client', 'build')
app.use(express.static(root))
app.get('*', (req, res) => {
  res.sendFile('index.html', { root })
})

app.listen(port, () => console.log(`Server started on ${port}`))
