const fetch = require("node-fetch");
const express = require("express");
var cors = require("cors");

const PORT = 3001;

const app = express();
app.use(cors());
app.use(express.json());

const GOOGLE_RECAPTCHA_SECRET_KEY = "";
const SITE_KEY = "6LdEdzsmAAAAABujRzZH_0-LYBIWyMaMI22_sfYa";
const PROJECT_ID = "zeffy-platform";
const API_KEY = "AIzaSyDLKIz_7pDfqqhOjg4768ZH3SU0jcykLiI";

app.post("/verify-recaptcha", async (req, res) => {
  try {
    const body = {
      event: {
        token: req.body.token,
        siteKey: SITE_KEY,
        expectedAction: "Purchase",
      },
    };

    const headers = {
      "Content-Type": "application/json",
    };

    const response = await fetch(
      `https://recaptchaenterprise.googleapis.com/v1/projects/${PROJECT_ID}/assessments?key=${API_KEY}`,
      { method: "post", body: JSON.stringify(body), headers: headers }
    );
    const data = await response.json();
    console.log(data);
    res.json({ ...data });
  } catch (err) {
    console.log(err);
    res.json({ message: "ERROR" });
  }
});

// app.post("/verify-recaptcha", async (req, res) => {
//   try {
//     const response = await fetch(
//       `https://www.google.com/recaptcha/api/siteverify?secret=${GOOGLE_RECAPTCHA_SECRET_KEY}&response=${req.body.token}`,
//       { method: "post" }
//     );
//     const data = await response.json();
//     console.log(data);
//     res.json({ ...data });
//   } catch (err) {
//     console.log(err);
//     res.json({ message: "ERROR" });
//   }
// });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
