const mongoose = require("mongoose");
const Celebreties = require("../db/model/Celebreties");

module.exports = async function (req, res) {
  try {
    if (!req.body.id) {
      return res.status(404).send();
    }

    const { title, face, birthday, knowledge } = req.body;

    const tags = `${title} ${face} ${birthday} ${knowledge || ""}`;

    const target_id = mongoose.Types.ObjectId(req.body.id);

    const result = await Celebreties.findOneAndUpdate(
      { id: target_id },
      { $set: { ...req.body, tags, id: undefined } },
      { new: true }
    );

    res.json(result);
  } catch (err) {
    console.error("celebrities.put ", err);
    return res.status(500).send();
  }
};
