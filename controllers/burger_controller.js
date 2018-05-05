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

// burger route handlers
router.get("/", (req, res) => {
  // burger.all(function(data) {
  //  var hbsObject = {
  //    cats: data
  //  };
  //  console.log(hbsObject);
  //  res.render("index", hbsObject);
  res.render("index");
  // });
});

// Export routes for server.js to use.
module.exports = router;