import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use((req, res, next) => {
  if (process.env.DEBUG) {
    console.log(process.env.INIT_CWD);
  }
  next();
});

app.get("", (req, res) => {
  res.send(`Hello SuperUsers!`);
});

// your code here

app.get("/multiply/:number", (req, res) => {
  const number = Number(req.params.number);
  res.send(`${number * process.env.MULTIPLIER}`);
});

// Handling non matching request from the client
app.use((req, res, next) => {
  res.status(404).send(
      "<p>Route Unknown</p>")
})

app.listen(PORT, () => {
  console.log("Server is running at http://localhost:" + PORT);
});
