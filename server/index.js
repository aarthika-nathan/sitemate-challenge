const express = require("express");
const app = express();

const issueRoutes = require('./v1/routes');

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "REST API SERVER" });
});

app.use("/v1/issues", issueRoutes);


app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
