const router = require("express").Router();
const jobController = require("../controllers/jobController");

router.post("/submit-search", jobController.submit_search);
router.get("/get-jobs-list", jobController.get_jobs_list);
router.get("/get-job/:id", jobController.get_job);

module.exports = router;
