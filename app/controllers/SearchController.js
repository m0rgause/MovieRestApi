const cheerio = require('cheerio');
const { default: Axios } = require('axios');
const { baseUrl } = require('../helpers/Constans');
const helps = require('../helpers/Extractor');

const search = async (req, res, next) => {
    try {
        const query = req.params.query;
        const page = (req.params.page != null) ? req.params.page : 1;
        const response = await Axios.get(baseUrl + "page/" + page + "/?s=" + query);
        const $ = cheerio.load(response.data);

        let endPage = $('div.pagination > a.next').prev().text();
        // const latest = $('div.latest > div.los > article.box');
        const typeMovie = $("div.latest > div.los > article[itemtype = 'http://schema.org/Movie']");
        const typeSeries = $("div.latest > div.los > article[itemtype = 'http://schema.org/TVSeries']");
        // console.log(type.html())
        
        let m = [];
        let s = [];
        typeMovie.each((i, elem) => {
            
            m.push({
                type: "movie",
                title: $(elem).find('h2.entry-title').text(),
                url: helps.extractId($(elem).find('a.tip').attr("href")),
                country: ($(elem).find('div.c').find('a').text() != "") ? $(elem).find('div.c').find('a').html() : null,
                linkCountry: ($(elem).find('div.c').find('a').attr('href')) ? helps.extractCountry($(elem).find('div.c').find('a').attr('href')) : null,
                quality: $(elem).find('span.quality').text(),
                image: $(elem).find('div.limit').find('img').attr('src'),
                dateCreated: $(elem).find('div.t').eq(0).find('time').text(),
            })
        })

        typeSeries.each((i, elem) => {
            
            s.push({
                type: "series",
                title: $(elem).find('h2.entry-title').text(),
				status: ($(elem).find('div.overlay > div.status').text() == "") ? 'Ongoing' : $(elem).find('div.overlay > div.status').text(),
				episode: $(elem).find('div.overlay > div.eps').text(),
                url: helps.extractId($(elem).find('a.tip').attr("href")),
				country: ($(elem).find('div.c').find('a').text() != "") ? $(elem).find('div.c').find('a').html() : null,
				linkCountry: ($(elem).find('div.c').find('a').attr('href')) ? helps.extractCountry($(elem).find('div.c').find('a').attr('href')) : null,
				image: $(elem).find('div.limit').find('img').attr('src'),
				dateCreated: $(elem).find('div.t').eq(0).find('time').text(),
            })
        })


        res.send({
            status: true,
            message: 'success',
            numPages: endPage,
            data: {
                series: s,
                movie: m
            }
        })

    } catch (err) {

    }
}

module.exports = { search }