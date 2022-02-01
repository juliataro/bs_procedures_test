const Contrain = require("../models/contrainModel");

//  Saving  NEW Contraindication
exports.postNewContrain = async (req, res, next) => {
  try {
    let { contr_title_et, contr_title_ru, contr_title_en } = req.body;

    let contrain = new Contrain(contr_title_et, contr_title_ru, contr_title_en);

    contrain = await contrain.saveNewContrain();

    console.log(contrain);
    res.send("Created New Contraindication!");
  } catch (error) {}
};

// Get All Contraindication from DB

exports.getAllContrains = async (req, res, next) => {
  try {
    let contrains = await Contrain.findAll();

    res.status(200).json({ contrains });
    res.send(rows);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Get the Contraindication By Id
exports.getContrainById = async (req, res, next) => {
  try {
    let [contrain, _] = await Contrain.findById(req.params.id);

    res.status(200).json({ contrain });
    res.send(rows);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Update Contraindication By Id
exports.updateContrainById = async (req, res, next) => {
  //   let contrain = await Contrain.findById(req.params.id);
  //   try {
  //     let { contr_title_et, contr_title_ru, contr_title_en } = req.body;
  //     const changeFields = await Contrain.findByIdAndUpdate(
  //       contrain,
  //       (contr_title_et, contr_title_ru, contr_title_en),
  //       {
  //         new: true,
  //         runValidators: true,
  //       }
  //     );
  //     res.status(200).json({ changeFields });
  //   } catch (error) {
  //     console.log(error);
  //     next(error);
  //   }
  //   try {
  //     let id = await Contrain.findById(req.params.id);
  //     let { contr_title_et, contr_title_ru, contr_title_en } = req.body;
  //     const changeFields = {
  //       contr_title_et: req.body.contr_title_et,
  //       contr_title_ru: req.body.contr_title_ru,
  //       contr_title_en: req.body.contr_title_en,
  //     };
  //     let contrain = await Contrain.findByIdAndUpdate(id, changeFields);
  //     res.status(200).json({ contrain });
  //   } catch (error) {
  //     console.log(error);
  //     next(error);
  //   }
};

// Delete the Contraindication By Id
exports.deleteContrainById = async (req, res, next) => {
  try {
    let contrainDelete = await Contrain.deleteById(req.params.id);

    res.status(200);
    res.send("Contraindication has been successfully deleted!");
  } catch (error) {
    console.log(error);
    next(error);
  }
};
