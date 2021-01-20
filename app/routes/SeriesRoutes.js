const DetailController = require("../controllers/DetailSeriesController");
const SeriesController = require("../controllers/SeriesController");
var router = require("express").Router();
var seriesRouter = require("express").Router();

router.get("/series/:uri", DetailController.detail);
router.get("/series/page/:id", SeriesController.latest);
router.get("/series", SeriesController.latest);


seriesRouter.use("/", router);

module.exports = { seriesRouter };