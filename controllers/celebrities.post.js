const Celebreties = require("../db/model/Celebreties");

module.exports = async function (req, res) {
  try {
    const { title, face, birthday, knowledge } = req.body;

    const tags = `${title} ${face} ${birthday} ${knowledge || ""}`;
    
    const result = await Celebreties.create({ ...req.body, tags });

    res.json(result);
  } catch (err) {
    console.error("celebrities.post ", err);
    return res.status(500).send();
  }
};
