import express from "express";
import dotenv from "dotenv";
import { showCurrentRoute } from "./middleware/showRoute.js";

const app = express();
const PORT = process.env.PORT || 4000;

dotenv.config();

app.get("", (req, res) => {
  res.send(`Hello SuperUsers!`);
});

// your code here

app.use(showCurrentRoute);
app.get("/multiply/:number", (req, res) => {
  const number = Number(req.params.number);
  res.send(`${number * process.env.MULTIPLIER}`);
});
app.get("*", function (req, res) {
  res.status(404).send("Route Unknown");
});

app.listen(PORT, () => {
  console.log("Server is running at http://localhost:" + PORT);
});
