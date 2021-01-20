const cheerio = require("cheerio");
const { default: Axios } = require("axios");
const {
	baseUrl,
} = require("../helpers/Constans");
const { extractId, extractCountry } = require('../helpers/Extractor');


const latest = async (req, res, next) => {
	try {
		const page = (req.params.id != null) ? req.params.id : 1;
		const response = await Axios.get(baseUrl + "/series/page/" + page);
		const $ = cheerio.load(response.data);

		const seriesList = $("div.latest").eq(0).find("article.box");
		let endPage = $('div.pagination > a.next').prev().text();
		let latestSeries = [];

		seriesList.each((i, elem) => {
			latestSeries.push({
				type: "series",
				title: $(elem).find('h2.entry-title').text(),
				status: ($(elem).find('div.overlay > div.status').text() == "") ? 'Ongoing' : $(elem).find('div.overlay > div.status').text(),
				episode: $(elem).find('div.overlay > div.eps').text(),
				url: extractId($(elem).find('a.tip').attr("href")),
				country: ($(elem).find('div.c').find('a').text() != "") ? $(elem).find('div.c').find('a').text() : null,
				linkCountry: ($(elem).find('div.c').find('a').attr('href')) ? extractCountry($(elem).find('div.c').find('a').attr('href')) : null,
				image: $(elem).find('div.limit').find('img').attr('src'),
				dateCreated: $(elem).find('div.t').eq(0).find('time').text(),
			});
		});
		res.send({
			status: true,
			message: "succes",
			numPages: endPage,
			data: { latestSeries },
		});
	} catch (err) {
		res.send({ status: false, message: err.stack });
	}
};

module.exports = { latest };