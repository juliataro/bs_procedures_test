const express = require("express");
const tControllers = require("../controllers/targetControllers");
const router = express.Router();

// @route GET && POST /symptoms/
router
  .route("/")
  .get(tControllers.getAllTargets)
  .post(tControllers.postNewTarget);

router.route("/:id").get(tControllers.getTargetById);

router
  .route("/:id")
  .put(tControllers.updateTargetById)
  .delete(tControllers.deleteTargetById);

module.exports = router;
