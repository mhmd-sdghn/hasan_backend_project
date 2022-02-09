const Works = require("../../db/model/Works");
const Celebreties = require("../../db/model/Celebreties");
exports.getAll = async function (req, res) {
  try {
    const result = await Works.find({})
      .sort({ createdAt: -1 })
      .populate("author", "-tags");
    res.json(result);
  } catch (err) {
    console.error("works.get ", err);
    return res.status(500).send();
  }
};

exports.search = async function (req, res) {
  try {
    let result;
    if (!req.query.q) {
      result = await Works.find({})
        .populate("author", "-tags")
        .sort({ createdAt: -1 });
    } else {
      result = await Works.find({
        $text: { $search: req.query.q },
      })
        .populate("author", "-tags")
        .select("-tags");
    }

    res.json(result);
  } catch (err) {
    console.error("works.get ", err);
    return res.status(500).send();
  }
};

exports.getSingle = async function (req, res) {
  try {
    const result = await Works.findById(req.params?.id).populate(
      "author",
      "-tags"
    );

    if (!result) return res.status(404).send();

    res.json(result);
  } catch (err) {
    console.error("works.get ", err);
    return res.status(500).send();
  }
};
