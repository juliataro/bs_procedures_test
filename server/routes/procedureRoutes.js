const express = require("express");
// Stands for "contraindications" tabel in DB
const pControllers = require("../controllers/procedureControllers");
const router = express.Router();

// @route GET && POST /contraindication/
router
  .route("/")
  .get(pControllers.getAllProcedures)
  .post(pControllers.postNewProcedure);

router.route("/:id").get(pControllers.getProcedureById);

router
  .route("/:id")
  .put(pControllers.updateProcedureById)
  .delete(pControllers.deleteProcedureById);

module.exports = router;
