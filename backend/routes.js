const express = require("express");
const controllers = require("./controllers.js");

// Quick Abstractions
const router = express.Router();

// Get all entries
router.get("/", controllers.main);

module.exports = router;
