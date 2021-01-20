const cheerio = require("cheerio");
const { default: Axios } = require("axios");


const extractId = (link) => {
  const itemExtract = link.split("/");
  return itemExtract[3];
};

const isWhat = (str) => {
  const itemExtract = str.split("/");
  return itemExtract[3];
}

const extractCountry = (link) => {
  const itemExtract = link.split("/");
  return itemExtract[4];
};

module.exports = { extractId, extractCountry };