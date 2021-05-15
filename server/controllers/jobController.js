const axios = require("axios");
const fs = require("fs");

async function removeNull(obj) {
  for (var prop in obj) {
    if (obj[prop] === null || obj[prop] === undefined) {
      delete obj[prop];
    }
  }
  return obj;
}

exports.submit_search = async (req, res, next) => {
  const removedNullObj = await removeNull(req.body);

  let queryString = Object.keys(removedNullObj)
    .map((key) => key + "=" + removedNullObj[key])
    .join("&");

  try {
    fs.unlinkSync("./response_jobs.json");
  } catch (err) {
    // console.error(err);
  }

  axios
    .get(`https://jobs.github.com/positions.json?${queryString}`)
    .then((resData) => {
      fs.writeFile(
        "./response_jobs.json",
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
};

exports.get_jobs_list = async (req, res, next) => {
  fs.readFile("./response_jobs.json", function (err, data) {
    if (err) {
      res.send(null);
    } else {
      res.send(JSON.parse(data));
    }
  });
};

exports.get_job = (req, res, next) => {
  const id = req.params.id;

  axios.get(`https://jobs.github.com/positions/${id}.json`).then((resjob) => {
    res.send(resjob.data);
  });
};
