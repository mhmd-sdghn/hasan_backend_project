const Celebreties = require("../../db/model/Celebreties");

module.exports = async function (req, res) {
  try {
    // type , description and author
    const result = await Celebreties.create({ ...req.body });

    res.json(result);
  } catch (err) {
    console.error("Celebreties.post ", err);
    return res.status(500).send();
  }
};
