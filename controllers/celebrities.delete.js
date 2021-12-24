const Celebreties = require('../db/model/Celebreties')

module.exports = async function (req, res) {
    try {
        const record = await Celebreties.findOneById(req.params.id);

        if (record) {
            record.remove();
        }

        res.send();
    } catch (err) {
        console.error('celebrities.delete ', err)
        return res.status(500).send();
    }
}