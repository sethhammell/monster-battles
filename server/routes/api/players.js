const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

router.get("/", async (req, res) => {
  const players = await loadPlayersCollection();
  res.send(await players.find({}).toArray());
});

router.get("/:name", async (req, res) => {
  const players = await loadPlayersCollection();
  res.send(await players.findOne({ name: req.params.name }));
});

router.put("/:name", async (req, res) => {
  const players = await loadPlayersCollection();
  const update = await players.updateOne(
    { name: req.params.name },
    {
      $set: {
        exp: req.body.exp,
        currentMonsterIndex: req.body.currentMonsterIndex,
      },
    }
  );
  update.matchedCount ? res.status(204).send() : res.status(404).send();
});

router.post("/", async (req, res) => {
  const players = await loadPlayersCollection();
  await players.insertOne({
    name: req.body.name,
    exp: 1,
    currentMonsterIndex: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  res.status(201).send();
});

router.delete("/:id", async (req, res) => {
  const players = await loadPlayersCollection();
  await players.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
  res.status(200).send();
});

async function loadPlayersCollection() {
  const uri =
    "mongodb+srv://helix:helix@vue-express.pg8oa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const client = await mongodb.MongoClient.connect(uri, {
    useNewUrlParser: true,
  });

  return client.db("vue-express").collection("players");
}

module.exports = router;
