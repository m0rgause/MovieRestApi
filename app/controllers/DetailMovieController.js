const cheerio = require("cheerio");
const { default: Axios } = require("axios");
const { baseUrl } = require('../helpers/Constans');
const download = require('../helpers/DownloadExtractor');
const detail = async (req, res) => {
	try {
		const uri = req.params.uri;
		const response = await Axios.get(baseUrl + uri);
		const $ = cheerio.load(response.data);
		// console.log(response.data)
		const info = $('div.infodb');
		const title = $(info).find('h1.entry-title').text();
		const thumbnail = $(info).find('div.left').find('img').attr('src');
		const updatedAt = $(info).find('div.right > div.mvinfo > time').eq(0).text();
		let genre = [];
		const listGenre = $(info).find('ul.data > li').eq(0).find('span > a');
		listGenre.each((i, elem) => {
			genre.push($(elem).text())
		});
		const release = $(info).find('ul.data > li').eq(1).find('span').text();
		let stars = [];
		const listStars = $(info).find('ul.data > li').eq(2).find('span > a');
		listStars.each((i, elem) => {
			stars.push($(elem).text());
		})
		const duration = $(info).find('ul.data > li').eq(3).find('span').text();
		const director = $(info).find('ul.data > li').eq(4).find('span').text();
		const country = $(info).find('ul.data > li').eq(5).find('span > span').text();
		const quality = $(info).find('ul.data > li').eq(6).find('i').text();

		let b = download.DownloadMoviebaru(response.data);
		let l = download.DownloadMovielama(response.data);
		const down = (b[360].length === 0) ? l : b;

		res.send({
			status: true,
			message: "succes",
			uri: uri,
			data: {
				info: {
					title,
					thumbnail,
					updatedAt,
					genre,
					release,
					stars,
					duration,
					director,
					country,
					quality
				},
				download: down
			},
		});
	} catch (err) {
		res.send({ status: false, message: err.stack });
	}

}

module.exports = { detail }