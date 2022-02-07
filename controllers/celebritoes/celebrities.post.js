const Works = require("../../db/model/Works");

module.exports = async function (req, res) {
  try {
    // type , description and author
    const result = await Works.create({ ...req.body });

    res.json(result);
  } catch (err) {
    console.error("works.post ", err);
    return res.status(500).send();
  }
};
