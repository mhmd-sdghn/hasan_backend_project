const Celebreties = require("../db/model/Celebreties");

exports.getAll = async function (req, res) {
  try {
    const result = await Celebreties.find({}).select("-tags");
    res.json(result);
  } catch (err) {
    console.error("celebrities.get ", err);
    return res.status(500).send();
  }
};

exports.getSingle = async function (req, res) {
  try {
    const result = await Celebreties.findById(req.params?.id).select("-tags");

    if (!result) return res.status(404).send();

    res.json(result);
  } catch (err) {
    console.error("celebrities.get ", err);
    return res.status(500).send();
  }
};
