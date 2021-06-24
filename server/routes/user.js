const express = require("express");
const router = express.Router();
const { user } = require("../db/models");
const passport = require("passport");

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/create", async (req, res) => {
  const {
    email,
    password,
    company,
    address,
    city,
    state,
    zip,
    phone,
    fax,
    cell,
    website,
  } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    user.create({
      email,
      password: hash,
      company,
      address,
      city,
      state,
      zip,
      phone,
      fax,
      cell,
      website,
    });
    res.json("success");
  });
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    // console.log(info);
    // console.log(user);
    // console.log(err);
    if (err) {
      res.send(err);
      console.log(err);
    }
    if (!user) {
      res.json({
        target: info.target,
        status: info.message,
      });
    } else {
      req.login(user, (error) => {
        if (error) {
          return next(error);
        }
        // console.log(user.user_id);
        return res.json({ status: "success" });
      });
    }
  })(req, res, next);
});

router.get("/loggedInUser", (req, res) => {
  // console.log(req.user);
  res.send(req.user);
});

router.get("/logout", (req, res) => {
  req.logout();
  res.send("Successfully logged out!");
});

module.exports = router;
