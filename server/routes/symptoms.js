const express = require("express");
const symptomControllers = require("../controllers/symptomControllers");
const router = express.Router();

// @route GET && POST /symptoms/
router.get("/", symptomControllers.getSymptomsList);

router.get("/:id", symptomControllers.findOneById);

// .delete(symptomControllers.deleteSymptom)
//   .update(symptomControllers.updateSymptom)

module.exports = router;
