const express = require("express");
const symptomControllers = require("../controllers/symptomControllers");
const router = express.Router();

// @route GET && POST /symptoms/
router.route("/").get(symptomControllers.getSymptomsList);

// router
//   .route("/:id")
//   .put(symptomControllers.updateSymptomById)
//   .delete(symptomControllers.deleteSymptomById);

// .delete(symptomControllers.deleteSymptom)
//   .update(symptomControllers.updateSymptom)

module.exports = router;
