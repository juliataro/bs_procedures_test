const express = require("express");
const dControllers = require("../controllers/diseaseControllers");
const router = express.Router();

// @route GET && POST /symptoms/
router
  .route("/")
  .get(dControllers.getAllDiseases)
  .post(dControllers.postNewDisease);

router.route("/:id").get(dControllers.getDiseaseById);

router
  .route("/:id")
  .put(dControllers.updateDiseaseById)
  .delete(dControllers.deleteDiseaseById);

module.exports = router;
