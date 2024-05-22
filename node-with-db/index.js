//@ts-check

import express from "express"
import { MongoClient } from "mongodb"

const url = process.env.MONGODB_URL || "mongodb://localhost:27017"
const client = await new MongoClient(url).connect()
const collection = client.db("demo").collection("demo")

const app = express().use(express.json())

app.get("/", async (_, res) => {
  const found = await collection.find().toArray()
  res.send({ found })
})

app.post("/", async (req, res) => {
  const inserted = await collection.insertOne({ ...req.body })
  res.status(200).json({ inserted: inserted.insertedId })
})

app.delete("/", async (_, res) => {
  const deleted = await collection.deleteMany()
  res.status(200).json({ deleted: deleted.deletedCount })
})

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Example app listening on port ${port}`))
