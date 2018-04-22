const express = require("express");
const app = express();
var bodyParser = require("body-parser");

app.use("/", express.static("build"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post("/check", (req, res) => {
  console.log("Body", req.body);
  res.sendStatus(200);
});

app.listen(4000, () => console.log("Example app listening on port 3000!"));
