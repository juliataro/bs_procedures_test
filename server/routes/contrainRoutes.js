const express = require("express");
// Stands for "contraindications" tabel in DB
const cControllers = require("../controllers/contrainControllers");
const router = express.Router();

// @route GET && POST /contraindication/
router
  .route("/")
  .get(cControllers.getAllContrains)
  .post(cControllers.postNewContrain);

router.route("/:id").get(cControllers.getContrainById);

router
  .route("/:id")
  .put(cControllers.updateContrainById)
  .delete(cControllers.deleteContrainById);

module.exports = router;
