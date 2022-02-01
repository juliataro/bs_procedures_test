const Procedure = require("../models/procedureModel");

//  Saving  NEW Symptom
exports.postNewProcedure = async (req, res, next) => {
  try {
    let {
      proc_title_et,
      proc_title_ru,
      proc_title_en,
      proc_descr_et,
      proc_descr_ru,
      proc_descr_en,
      proc_duration,
      proc_price,
    } = req.body;

    let procedure = new Procedure(
      proc_title_et,
      proc_title_ru,
      proc_title_en,
      proc_descr_et,
      proc_descr_ru,
      proc_descr_en,
      proc_duration,
      proc_price
    );

    procedure = await procedure.saveNewProcedure();

    console.log(procedure);
    res.send("Created New Procedure!");
  } catch (error) {}
};

// Get All Procedures from DB

exports.getAllProcedures = async (req, res, next) => {
  try {
    let procedures = await Procedure.findAll();

    res.status(200).json({ procedures });
    res.send(rows);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Get the Procedure By Id
exports.getProcedureById = async (req, res, next) => {
  try {
    let [procedure, _] = await Procedure.findById(req.params.id);

    res.status(200).json({ procedure });
    res.send(rows);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Update Procedure By Id
exports.updateProcedureById = async (req, res, next) => {};

// Delete the ProcedureBy Id
exports.deleteProcedureById = async (req, res, next) => {
  try {
    let procedureDelete = await Procedure.deleteById(req.params.id);

    res.status(200);
    res.send("Procedure has been successfully deleted!");
  } catch (error) {
    console.log(error);
    next(error);
  }
};
