const router = require('express').Router;
const celebritiesPost = require('./controllers/celebrities.post')

router.post('/' , celebritiesPost);

module.exports = router;