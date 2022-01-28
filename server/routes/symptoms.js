const express = require("express");
const sControllers = require("../controllers/symptomControllers");
const router = express.Router();

// @route GET && POST /symptoms/
router
  .route("/")
  .get(sControllers.getAllSymptoms)
  .post(sControllers.postNewSymptom);

router.route("/:id").get(sControllers.getSymptomById);

router
  .route("/:id")
  .put(sControllers.updateSymptomById)
  .delete(sControllers.deleteSymptomById);

module.exports = router;
