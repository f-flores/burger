// ================================================================================
//
// File name: burger_controller.js
// Description: burger app controller module. Defines route handlers. Imports
//  burger_db database functions.
//
// ================================================================================

var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// burguer route handlers

// Export routes for server.js to use.
module.exports = router;