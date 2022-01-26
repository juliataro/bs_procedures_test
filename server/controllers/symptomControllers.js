const Symptom = require("../models/Symptom");

//  Saving  NEW Symptom
exports.postNewSymptom = async (req, res, next) => {
  try {
    let { title_et, title_ru, title_en } = req.body;
    let symptom = new Symptom(title_et, title_ru, title_en);

    symptom = await symptom.save();

    console.log(symptom);

    res.send("Create new post");
  } catch (error) {}
};

// Get Allposts from DB

exports.getAllSymptoms = async (req, res, next) => {
  try {
    const symptoms = await Symptom.findAll();
    res.status(200).json({ symptoms });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Get Symptom by Id

exports.getSymptomById = async (req, res, next) => {
  try {
    //let symptom = await Symptom.findById(2);
    let id = req.params.id;
    let [symptom, _] = await Symptom.findById(id);

    res.status(200).json({ symptom });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
