const express = require("express");
const router = express.Router();
const { user } = require("../db/models");
const passport = require("passport");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

// gmail transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "healthy.you.511@gmail.com",
    pass: "qJsRjjg(u&4g$A",
  },
});

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/create", async (req, res) => {
  const base = "http://localhost:3000/confirmEmail/";
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
    user
      .create({
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
      })
      .then((result) => {
        res.json({
          status: "success",
        });
        console.log(result.dataValues.email);
        const mailOptions = {
          from: '"GMF Media Group" <healthy.you.511@gmail.com>', // sender address
          to: result.dataValues.email,
          subject: "Please Confirm Your Email!", // Subject line
          text: `Click this link to confirm your email and get started!: <a href="${base}${result.dataValues.user_id}"> Confirm your email! </a>`, // plain text body
          html: `Click this link to confirm your email and get started!: <a href="${base}${result.dataValues.user_id}"> Confirm your email! </a>`,
        };
        // send mail with defined transport object
        const info = transporter.sendMail(mailOptions);
      })
      .catch((err) => {
        console.log(err);
        res.json({
          status: err.errors,
        });
      });
  });
});

router.post("/find", async (req, res) => {
  try {
    const userResult = await user.findOne({
      where: {
        user_id: req.body.user_id,
      },
      raw: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        confirmed: userResult.confirmed,
      },
    });
  } catch (err) {
    // console.log(req.body);
    console.log(err);
    // console.log("THERE IS AN ERROR!");
  }
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
