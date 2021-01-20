const DetailController = require("../controllers/DetailMovieController");
const MovieController = require("../controllers/MovieController");
var router = require("express").Router();
var moviesRouter = require("express").Router();

router.get("/movie/:uri", DetailController.detail);
router.get("/movie/page/:id", MovieController.latest);
router.get("/movie", MovieController.latest);


moviesRouter.use("/", router);

module.exports = { moviesRouter };