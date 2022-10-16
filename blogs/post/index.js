const express = require("express");
const { randomBytes } = require("crypto");

const app = express();
app.use(express.json());

const post = {};

app.get("/", (req, res) => {
  res.status(200).send(post);
});

app.post("/", (req, res) => {
  const { title } = req.body;
  const id = randomBytes(5).toString("hex");
  post[id] = { id, title };
  res.status(200).send(`Post with ${id} was successfull created!`);
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`app running on PORT ${PORT}`);
});
