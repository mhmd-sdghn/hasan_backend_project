const Celebreties = require('../db/model/Celebreties')

module.exports = async function (req, res) {
    try {
        const record = await Celebreties.findById(req.params.id);

        if (record) {
            record.destory();
        }

        res.send();
    } catch (err) {
        console.error('celebrities.delete ', err)
        return res.status(500).send();
    }
}