const mongoose = require('mongoose');
const dbUrlString = 'mongodb+srv://Hasan:Hasan_abm7@webproject.huvor.mongodb.net/auth-uniProject?retryWrites=true&w=majority'

module.exports = function() {
    mongoose.Promise = global.Promise;
    mongoose.connect(dbUrlString, {
        useNewUrlParser: true
    }, (err) => {
        if (err) {
            console.error('DataBase => Error \n\n' + err)
        }
        else {
            console.info('DataBase Connected')
        }
    });
}