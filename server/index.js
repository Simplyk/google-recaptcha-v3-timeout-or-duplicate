const fetch = require("node-fetch");
const express = require("express");
var cors = require("cors");

const PORT = 3001;

const app = express();
app.use(cors());
app.use(express.json());

const GOOGLE_RECAPTCHA_SECRET_KEY = "";

app.post("/verify-recaptcha", async (req, res) => {
  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${GOOGLE_RECAPTCHA_SECRET_KEY}&response=${req.body.token}`,
      { method: "post" }
    );
    const data = await response.json();
    console.log(data);
    res.json({ ...data });
  } catch (err) {
    console.log(err);
    res.json({ message: "ERROR" });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
