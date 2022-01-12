const Celebreties = require("../../db/model/Celebreties");

exports.getAll = async function (req, res) {
  try {
    const result = await Celebreties.find({})
      .select("-tags")
      .sort({ createdAt: -1 });
    res.json(result);
  } catch (err) {
    console.error("celebrities.get ", err);
    return res.status(500).send();
  }
};

exports.search = async function (req, res) {
  try {
    let result;
    if (!req.query.q) {
      result = await Celebreties.find({})
        .select("-tags")
        .sort({ createdAt: -1 });
    } else {
      result = await Celebreties.find({
        $text: { $search: req.query.q },
      }).select("-tags");
    }

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
