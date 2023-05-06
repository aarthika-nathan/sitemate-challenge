var router = require("express").Router();
const {
  createIssue,
  getIssues,
  deleteIssue,
  updateIssue,
} = require("../issue/issue");

router.get("/", (req, res) => {
  try {
    const issues = getIssues();
    res.send(issues);
  } catch (e) {
    res.status(500).send({ error: "error occurred while fetching issues" });
  }
});

router.post("/", (req, res) => {
  try {
    const newIssue = req.body;
    const issues = createIssue(newIssue);
    res.send(issues);
  } catch (e) {
    res.status(500).send({ error: "error occurred while fetching issues" });
  }
});

router.put("/:id", (req, res) => {
  try {
    const issues = updateIssue(req.params.id, req.body);
    res.send(issues);
  } catch (e) {
    res.status(500).send({ error: "error occurred while updating an issue" });
  }
});

router.delete("/:id", (req, res) => {
  try {
    const issues = deleteIssue(req.params.id);
    res.send(issues);
  } catch (e) {
    res.status(500).send({ error: "error occurred while deleting an issue" });
  }
});

module.exports = router;
