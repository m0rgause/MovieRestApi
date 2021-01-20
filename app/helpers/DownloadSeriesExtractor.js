const cheerio = require("cheerio");

const Downloadlama = (str) => {
    const $ = cheerio.load(str);
    const info = $('div.infodb');

    let _240 = [];
    let _360 = [];
    let _480 = [];
    let _720 = [];
    let _1080 = [];
    const list_240 = ($(info).find('p:contains("240p =") > a') != "") ? $(info).find('p:contains("240p =") > a') : $(info).find('strong:contains("240p =") > a');
    const list_360 = ($(info).find('p:contains("360p =") > a') != "") ? $(info).find('p:contains("360p =") > a') : $(info).find('strong:contains("360p =") > a');
    const list_480 = ($(info).find('p:contains("480p =") > a') != "") ? $(info).find('p:contains("480p =") > a') : $(info).find('strong:contains("480p =") > a');
    const list_720 = ($(info).find('p:contains("720p =") > a') != "") ? $(info).find('p:contains("720p =") > a') : $(info).find('strong:contains("720p =") > a');
    const list_1080 = ($(info).find('p:contains("1080p") > a') != "") ? $(info).find('p:contains("1080p") > a') : $(info).find('strong:contains("1080p") > a');
    list_240.each((i, el) => {
        _240.push({
            server: $(el).text(),
            link: $(el).attr("href"),
        });
    })
    list_360.each((i, el) => {
        _360.push({
            server: $(el).text(),
            link: $(el).attr("href"),
        });
    })


    list_480.each((i, el) => {
        _480.push({
            server: $(el).text(),
            link: $(el).attr("href"),
        });
    })

    list_720.each((i, el) => {
        _720.push({
            server: $(el).text(),
            link: $(el).attr("href"),
        });
    })

    list_1080.each((i, el) => {
        _1080.push({
            server: $(el).text(),
            link: $(el).attr("href"),
        });
    })

    return { _240, _360, _480, _720, _1080 }
}

const Downloadbaru = (str) => {
    const $ = cheerio.load(str);
    const info = $('div.infodb');

    let _240 = [];
    let _360 = [];
    let _480 = [];
    let _720 = [];
    let _1080 = [];

    const list_240 = (!$(info).find('div.dzdesu').eq(0).find('ul').eq(0).find('li > ul > li > strong:contains("240")').parent().find('a')) ? $(info).find('div.dzdesu').eq(0).find('ul').eq(0).find('li > ul > li > strong:contains("240")').parent().find('a') : $(info).find('div.dzdesu').eq(0).find('ul').eq(2).find('li > strong:contains("240")').parent().find('a');
    const list_360 = (!$(info).find('div.dzdesu').eq(0).find('ul').eq(0).find('li > ul > li > strong:contains("360")').parent().find('a')) ? $(info).find('div.dzdesu').eq(0).find('ul').eq(0).find('li > ul > li > strong:contains("360")').parent().find('a') : $(info).find('div.dzdesu').eq(0).find('ul').eq(2).find('li > strong:contains("360")').parent().find('a');
    const list_480 = (!$(info).find('div.dzdesu').eq(0).find('ul').eq(0).find('li > ul > li > strong:contains("480")').parent().find('a')) ? $(info).find('div.dzdesu').eq(0).find('ul').eq(0).find('li > ul > li > strong:contains("480")').parent().find('a') : $(info).find('div.dzdesu').eq(0).find('ul').eq(2).find('li > strong:contains("480")').parent().find('a');
    const list_720 = (!$(info).find('div.dzdesu').eq(0).find('ul').eq(0).find('li > ul > li > strong:contains("720")').parent().find('a')) ? $(info).find('div.dzdesu').eq(0).find('ul').eq(0).find('li > ul > li > strong:contains("720")').parent().find('a') : $(info).find('div.dzdesu').eq(0).find('ul').eq(2).find('li > strong:contains("720")').parent().find('a');
    const list_1080 = (!$(info).find('div.dzdesu').eq(0).find('ul').eq(0).find('li > ul > li > strong:contains("1080")').parent().find('a')) ? $(info).find('div.dzdesu').eq(0).find('ul').eq(0).find('li > ul > li > strong:contains("1080")').parent().find('a') : $(info).find('div.dzdesu').eq(0).find('ul').eq(2).find('li > strong:contains("1080")').parent().find('a');

    list_240.each((i, el) => {
        _240.push({
            server: $(el).text(),
            link: $(el).attr("href"),
        });
    })

    list_360.each((i, el) => {
        _360.push({
            server: $(el).text(),
            link: $(el).attr("href"),
        });
    })

    list_480.each((i, el) => {
        _480.push({
            server: $(el).text(),
            link: $(el).attr("href"),
        });
    })

    list_720.each((i, el) => {
        _720.push({
            server: $(el).text(),
            link: $(el).attr("href"),
        });
    })

    list_1080.each((i, el) => {
        _1080.push({
            server: $(el).text(),
            link: $(el).attr("href"),
        });
    })
    return { _240, _360, _480, _720, _1080 }
}

const DownloadEpisode = (str) => {
    const $ = cheerio.load(str);
    const info = $('div.infodb');
    const eps = $(info).find('div.dzdesu');

    let ps = [];
    eps.each((i, elem) => {
        _360 = [];
        _480 = [];
        _720 = [];
        _1080 = [];
        $(elem).find('strong:contains("360")').parent().find('a').each((i, el) => {
            _360.push({
                server: $(el).text(),
                link: $(el).attr('href'),
            })
        })
        $(elem).find('strong:contains("480")').parent().find('a').each((i, el) => {
            _480.push({
                server: $(el).text(),
                link: $(el).attr('href'),
            })
        })
        $(elem).find('strong:contains("720")').parent().find('a').each((i, el) => {
            _720.push({
                server: $(el).text(),
                link: $(el).attr('href'),
            })
        })
        $(elem).find('strong:contains("1080")').parent().find('a').each((i, el) => {
            _1080.push({
                server: $(el).text(),
                link: $(el).attr('href'),
            })
        })

        // return i;
        ps.push({
            360: _360,
            480: _480,
            720: _720,
            1080: _1080
        })
    })

    return ps;
}

module.exports = { Downloadlama, Downloadbaru, DownloadEpisode }