const symptomModel = require("../models/Symptom");

// exports.getSymptomsList = function (req, res, next) {
//   //console.log('here all employees list');

//   symptomModel.getAll((err, symptoms) => {
//     console.log("Controller");
//     if (err) res.send(err);
//     console.log("Result", symptoms);
//     res.send(symptomControllers);
//   });
// };

module.exports = {
  getSymptomsList: async (req, res) => {
    try {
      const result = await getAll();
      return res.json({
        success: 1,
        data: result,
      });
    } catch (e) {
      return res.status(400).send({ error: e.message });
    }
  },

  findOneById: async (req, res) => {},
};

// exports.getSymptomsList = async (req, res) => {
//   try {
//     const result = await getAll();
//     return res.json({
//       success: 1,
//       data: result,
//     });
//   } catch (e) {
//     return res.status(400).send({ error: e.message });
//   }
// };

// module.exports = getSymptomsList;
