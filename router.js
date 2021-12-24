const router = require('express').Router();
const celebritiesPost = require('./controllers/celebrities.post')
const celebritiesGet = require('./controllers/celebrities.get')
const celebritiesPut = require('./controllers/celebrities.put')
const celebritiesDelete = require('./controllers/celebrities.delete')

router.get('/' , (req , res) => {
    res.send('server is up and running')
})

router.post('/celebrities' , celebritiesPost);

router.get('/celebrities' , celebritiesGet.getAll);

router.get('/celebrities/:id' , celebritiesGet.getSingle);

router.delete('/celebrities/:id' , celebritiesDelete);

router.put('/celebrities' , celebritiesPut);

router.use((req, res) => {
    return res.status(404).json({
        status: 'NotFound',
        devMSG: 'NotFound',
        userMSG: 'یافت نشد'
    })
})

module.exports = router;