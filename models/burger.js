// ================================================================================
//
// File name: burger.js
// Description: This file contains the database model for the burger app.
//
// ================================================================================

// Import ORM module
var orm = require("../config/orm.js");

// the burger.js 'model' uses orm functions that will interact with the
// burger_db database.

var burger = {
  "all": (cb) => {
    orm.all("burgers", (res) => {
      cb(res);
    });
  },
  // variables cols and vals are arrays.
  "create": (cols, vals, cb) => {
    orm.create("burgers", cols, vals, (res) => {
      cb(res);
    });
  },
  "update": (objColVals, condition, cb) => {
    orm.update("burgers", objColVals, condition, (res) => {
      cb(res);
    });
  },
  "delete": (condition, cb) => {
    orm.delete("burgers", condition, (res) => {
      cb(res);
    });
  }
};

module.exports = burger;