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

router.post("/getUserPendingOrders", async (req, res) => {
  try {
    const getAllOrders = await order.findAll({
      where: {
        email: req.body.email,
        status: "IN-PROGRESS",
      },
      raw: true,
    });
    // console.log(getAllUsers);
    res.status(200).json({
      status: "success",
      data: getAllOrders,
    });
  } catch (err) {
    console.error(err.message);
  }
});

router.post("/getUserCompletedOrders", async (req, res) => {
  try {
    const getAllOrders = await order.findAll({
      where: {
        email: req.body.email,
        status: "COMPLETED",
      },
      raw: true,
    });
    // console.log(getAllUsers);
    res.status(200).json({
      status: "success",
      data: getAllOrders,
    });
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/getPendingOrders", async (req, res) => {
  try {
    const getAllOrders = await order.findAll({
      where: {
        status: "IN-PROGRESS",
      },
      raw: true,
    });
    // console.log(getAllUsers);
    res.status(200).json({
      status: "success",
      data: getAllOrders,
    });
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/getCompletedOrders", async (req, res) => {
  try {
    const getAllOrders = await order.findAll({
      where: {
        status: "COMPLETED",
      },
      raw: true,
    });
    // console.log(getAllUsers);
    res.status(200).json({
      status: "success",
      data: getAllOrders,
    });
  } catch (err) {
    console.error(err.message);
  }
});

router.post("/complete", async (req, res) => {
  try {
    const orderResult = await order.update(
      { status: "COMPLETED" },
      { where: { order_id: req.body.order_id }, raw: true }
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
