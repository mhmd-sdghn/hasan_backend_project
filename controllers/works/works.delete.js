const Works = require("../../db/model/Works");

module.exports = async function (req, res) {
  try {
    const record = await Works.findById(req.params.id);

    if (record) {
      await record.remove();
    }

    res.send();
  } catch (err) {
    console.error("works.delete ", err);
    return res.status(500).send();
  }
};
