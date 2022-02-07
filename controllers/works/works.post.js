const Celebreties = require("../../db/model/Celebreties");

module.exports = async function (req, res) {
  try {
    const { title, description } = req.body;

    const result = await Celebreties.create({ ...req.body });

    res.json(result);
  } catch (err) {
    console.error("celebrities.post ", err);
    return res.status(500).send();
  }
};
