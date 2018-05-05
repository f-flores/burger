// ================================================================================
//
// File name: burger_controller.js
// Description: burger app controller module. Defines route handlers. Imports
//  burger_db database functions.
//
// ================================================================================

var express = require("express");

// var router = express.Router();
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// burger route handlers
// get all burgers
router.get("/", (req, res) => {
  burger.all((data) => {
    var hbsObject = {"burgers": data};

    console.log(hbsObject);
    res.render("index", hbsObject);
 });
});

// post or insert
router.post("/api/burgers", (req, res) => {
  burger.create(
      ["burger_name", "devoured"],
      [req.body.burger_name, req.body.devoured], (result) => {
      // Send back the ID of the new quote
      res.json({"id": result.insertId});
  }
  );
});

// update
router.put("/api/burgers/:id", (req, res) => {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({"devoured": req.body.devoured}, condition, (result) => {
    if (result.changedRows === 0) {
      // If no rows were changed, ID must not exist, return 404
      return res.status(404).end();
    }
    res.status(200).end();

    return true;
  });
});

// delete
router.delete("/api/burgers/:id", (req, res) => {
  var condition = "id = " + req.params.id;

  burger.delete(condition, (result) => {
    if (result.affectedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();

    return true;
  });
});

// Export routes for server.js to use.
module.exports = router;