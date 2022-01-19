const express = require("express");
const pcontroller = require("../controllers/сprocedures");
const router = require("express").Router();

// @route GET
// New functions that will be created in Controllers/Cprocedures.js file
router.route("/").get(pcontroller.getAllProcedures);
//   .post(pcontroller.createNewProcedure);

// router.route("/:id").get(pcontroller.getProcedureByID);

module.exports = router;
