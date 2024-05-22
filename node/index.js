const express = require("express")
const app = express()
const port = 3000

app.get("/", (_, res) => {
  res.send({ message: "Hello Docker Black Forest!" })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
