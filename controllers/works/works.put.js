const mongoose = require("mongoose");
const Celebreties = require("../../db/model/Celebreties");

module.exports = async function (req, res) {
  try {
    if (!req.body.id) {
      return res.status(404).send();
    }

    const record = await Celebreties.findByIdAndUpdate(
      req.body.id,
      { ...req.body },
      { new: true }
    );

    res.json(record);
  } catch (err) {
    console.error("works.put ", err);
    return res.status(500).send();
  }
};
