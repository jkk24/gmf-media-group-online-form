const express = require("express");
const router = express.Router();
const { order } = require("../db/models");

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/create", async (req, res) => {
  const {
    email,
    total,
    printing_options,
    type_of_ad,
    digital_services,
    advertising_duration,
  } = req.body;
  try {
    const newOrder = await order.create({
      email: email,
      total: total,
      printing_options: printing_options,
      type_of_ad: type_of_ad,
      digital_services: digital_services,
      advertising_duration: advertising_duration,
    });
    console.log(newOrder);
    res.json({
      status: "success",
    });
  } catch (err) {
    res.send(err);
  }
});

router.post("/checkConfirmation", async (req, res) => {
  try {
    const userResult = await user.findOne({
      where: {
        user_id: req.body.user_id,
      },
      raw: true,
    });
    res.status(200).json({
      status: "success",
      confirmed: userResult.confirmed,
    });
  } catch (err) {
    // console.log(req.body);
    console.log(err);
    // console.log("THERE IS AN ERROR!");
  }
});

router.post("/checkConfirmationOnLogin", async (req, res) => {
  try {
    const userResult = await user.findOne({
      where: {
        email: req.body.email,
      },
      raw: true,
    });
    res.status(200).json({
      status: "success",
      confirmed: userResult.confirmed,
      adminConfirmed: userResult.adminConfirmed,
    });
  } catch (err) {
    // console.log(req.body);
    console.log(err);
    // console.log("THERE IS AN ERROR!");
  }
});

router.post("/userConfirmEmail", async (req, res) => {
  try {
    const userResult = await user.update(
      { confirmed: "true" },
      { where: { user_id: req.body.user_id }, raw: true }
    );
    const mailOptions = {
      from: '"GMF Media Group" <healthy.you.511@gmail.com>', // sender address
      to: "healthy.you.511@gmail.com",
      subject: `${userResult.email} has signed up!`, // Subject line
      text: "Please log into your admin dashboard to approve or delete the account.", // plain text body
      html: "Please log into your admin dashboard to approve or delete the account.",
    };
    // send mail with defined transport object
    const info = transporter.sendMail(mailOptions);
    res.status(200).json({
      status: "success",
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

router.get("/getAllUsers", async (req, res) => {
  try {
    const getAllUsers = await user.findAll({
      where: {
        role: "user",
      },
      raw: true,
    });
    // console.log(getAllUsers);
    res.status(200).json({
      status: "success",
      data: getAllUsers,
    });
  } catch (err) {
    console.error(err.message);
  }
});

router.post("/approve", async (req, res) => {
  try {
    const userResult = await user.update(
      { adminConfirmed: "true" },
      { where: { user_id: req.body.user_id }, raw: true }
    );
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    // console.log(req.body);
    console.log(err);
    // console.log("THERE IS AN ERROR!");
  }
});

module.exports = router;
