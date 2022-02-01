const Target = require("../models/targetModel");

//  Saving NEW Target
exports.postNewTarget = async (req, res, next) => {
  try {
    let { tar_title_et, tar_title_ru, tar_title_en } = req.body;

    let target = new Target(tar_title_et, tar_title_ru, tar_title_en);

    target = await target.saveNewTarget();

    console.log(target);
    res.send("Created New Target!");
  } catch (error) {}
};

// Get Allposts from DB

exports.getAllTargets = async (req, res, next) => {
  try {
    let targets = await Target.findAll();

    res.status(200).json({ targets });
    res.send(rows);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Get the Symptom By Id
exports.getTargetById = async (req, res, next) => {
  try {
    let [target, _] = await Target.findById(req.params.id);

    res.status(200).json({ target });
    res.send(rows);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Update Symptom By Id
exports.updateTargetById = async (req, res, next) => {};

// Delete the Symptom By Id
exports.deleteTargetById = async (req, res, next) => {
  try {
    let targetDelete = await Target.deleteById(req.params.id);

    res.status(200);
    res.send("Target has been successfully deleted");
  } catch (error) {
    console.log(error);
    next(error);
  }
};
