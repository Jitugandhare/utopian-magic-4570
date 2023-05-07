const express = require("express");
const { connection } = require("./db");
const { userRuter } = require("./routs/user.routs");

const { authenticate } = require("./middleware/auth.middleware");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("HOME PAGE");
});
//access the routes...
app.use("/users", userRuter);
app.use(authenticate);

app.listen(8080, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (err) {
    console.log(err.message);
  }
});
