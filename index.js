require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { homeRouter } = require('./app/routes/HomeRoutes');
const { moviesRouter } = require('./app/routes/MovieRoutes');
const { seriesRouter } = require('./app/routes/SeriesRoutes');
const { searchRouter } = require('./app/routes/SearchRoutes');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(homeRouter);
app.use(moviesRouter);
app.use(seriesRouter);
app.use(searchRouter);
app.use("*", (req, res) => {
  res.send({ status: false, message: "URL not found" });
});

const PORT = process.env.PORT || 8090;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});