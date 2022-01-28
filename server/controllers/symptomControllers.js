const Symptom = require("../models/Symptom");

//  Saving  NEW Symptom
exports.postNewSymptom = async (req, res, next) => {
  try {
    let { title_et, title_ru, title_en } = req.body;

    let symptom = new Symptom(title_et, title_ru, title_en);

    symptom = await symptom.saveNewSymptom();

    console.log(symptom);
    res.send("Created new symptom");
  } catch (error) {}
};

// Get Allposts from DB

exports.getAllSymptoms = async (req, res, next) => {
  try {
    let symptoms = await Symptom.findAll();

    res.status(200).json({ symptoms });
    res.send(rows);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Get the Symptom By Id
exports.getSymptomById = async (req, res, next) => {
  try {
    //let symptom = await Symptom.findById(2);

    let [symptom, _] = await Symptom.findById(req.params.id);

    res.status(200).json({ symptom });
    res.send(rows);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Update Symptom By Id
exports.updateSymptomById = async (req, res, next) => {
  let { title_et, title_ru, title_en } = req.body;

  try {
    let [symptom, _] = await Symptom.updateById(req.params.id, req.params);
    // res.status(200).json({ symptom });
    res.json({ message: "updated" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Delete the Symptom By Id
exports.deleteSymptomById = async (req, res, next) => {
  try {
    //let symptom = await Symptom.findById(2);

    let symptomDelete = await Symptom.deleteById(req.params.id);

    res.status(200);
    res.send("Symptom has been successfully deleted");
  } catch (error) {
    console.log(error);
    next(error);
  }
};
