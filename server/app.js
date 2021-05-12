const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const fs = require("fs");
const { json } = require("body-parser");

const PORT = process.env.PORT | 9000;

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/get-jobs", async (req, res, next) => {
  axios.get("https://jobs.github.com/positions.json").then((resData) => {
    fs.writeFile(
      "responeJobsJson/response_jobs.json",
      JSON.stringify(resData.data, null, 2),
      (err) => {
        if (err) console.log(err);
        console.log("Successfully Written to File.");
      }
    );
  });
  res.send({
    status: "success",
    message:
      "Request is being processed and results will be available shortly.",
  });
});

app.get("/get-jobs-list", async (req, res, next) => {
  fs.readFile("responeJobsJson/response.json", function (err, data) {
    console.log(data);
    res.send(JSON.parse(data));
  });
});

app.listen(PORT, () => console.log(`server is up on port ${PORT}`));
