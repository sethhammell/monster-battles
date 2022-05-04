const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

router.get("/", async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray());
});

router.post("/", async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.insertOne({
    text: req.body.text,
    createdAt: new Date(),
  });
  res.status(201).send();
});

router.delete("/:id", async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
  res.status(200).send();
});

async function loadPostsCollection() {
  const uri =
    "mongodb+srv://helix:helix@vue-express.pg8oa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const client = await mongodb.MongoClient.connect(uri, {
    useNewUrlParser: true,
  });

  return client.db("vue-express").collection("posts");
}

module.exports = router;
