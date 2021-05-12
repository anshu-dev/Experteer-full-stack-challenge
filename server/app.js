const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const PORT = process.env.PORT | 3000;

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/get-jobs", () => {
  console.log("get job");
});

app.get("/get-jobs-list", () => {
  console.log("get job-list");
});

app.listen(PORT, () => console.log(`server is up on port ${PORT}`));
