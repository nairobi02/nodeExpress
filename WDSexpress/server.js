const express = require("express");
const app = express();
const PORT = 5000;

const users = require("./routes/users");
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.status(200).download("./server.js");
  res.render("index", { textadf: "world" });
});
app.use("/users", users);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
