const express = require("express");
const authController = require("./controllers/authController");
const flightController = require("./controllers/flightController");

const router = express.Router();

// Authentication routes
router.post("/register", authController.register);
router.post("/login", authController.login);

// Flight routes
router.get("/flights", flightController.getFlights);
router.post("/flights", flightController.addFlight);

module.exports = router;
