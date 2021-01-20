const searchController = require('../controllers/SearchController');

const router = require('express').Router();
const searchRouter = require('express').Router();

router.get('/search/:query/:page', searchController.search);
router.get('/search/:query', searchController.search);


searchRouter.use('/', router);

module.exports = { searchRouter }

