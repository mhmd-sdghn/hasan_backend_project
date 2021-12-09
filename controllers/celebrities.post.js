const Celebreties = require('../db/model/Celebreties')

module.exports = function(req ,res)  {
    try {
        
    } catch (err) {
        console.error('celebrities.post ' , err)
        return res.status(500).send();
    }
}