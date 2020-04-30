const express = require("express");
const path = require("path");
const htmlRouter = require("./routes/htmlRoutes");
const apiRouter = require("./routes/apiRoutes");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/", htmlRouter);
app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log("Server working! listening on: localhost:" + PORT);
});
