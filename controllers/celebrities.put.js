const mongoose = require("mongoose");
const Celebreties = require("../db/model/Celebreties");

module.exports = async function (req, res) {
  try {
    if (!req.body.id) {
      return res.status(404).send();
    }

    const { title, face, birthday, knowledge } = req.body;

    const tags = `${title} ${face} ${birthday} ${knowledge || ""}`;

    const record = await Celebreties.findByIdAndUpdate(
      req.body.id,
      { ...req.body, tags, id: undefined },
      { new: true }
    );

    res.json(record);
  } catch (err) {
    console.error("celebrities.put ", err);
    return res.status(500).send();
  }
};
