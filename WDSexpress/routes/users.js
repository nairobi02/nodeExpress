const express = require("express");
const router = express.Router();

const logger = (req, res, next) => {
  console.log(`1Time is ${Date.now()}`);
  next();
};
const users = [{ name: "Kyel" }, { name: "Sally" }];
router
  .route("/")
  .get((req, res) => {
    console.log("we are on /users");
    res.send(req.originalUrl);
  })
  .post((req, res) => {
    const isValid = true;
    if (isValid) {
      users.push({ name: req.body.firstName });

      res.redirect(`/users/${users.length - 1}`);
    } else {
      res.render("users/new", { firstName: req.body.firstName });
    }
    // res.json({ success: true, data: [req.body] });
  });
router.route("/new").get((req, res) => {
  res.render("users/new", { firstName: "Testing" });
});
router
  .route("/:id")
  .get((req, res) => {
    console.log(`we are on /users/id with id number: ${req.params.id}`);
    res.send(
      `we are on /users/id with id number: ${req.params.id} and name ${req.user.name} `
    );
  })
  .put((req, res) => {
    res.send(`Update User with ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete User with ID ${req.params.id}`);
  });
router.param("id", (req, res, next, id) => {
  //   console.log(id);
  req.user = users[id];
  next();
});
module.exports = router;
