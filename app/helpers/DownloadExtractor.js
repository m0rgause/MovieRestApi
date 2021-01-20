const cheerio = require("cheerio");

const DownloadMovielama = (str) => {
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

    const ps = {
        360: _360,
        480: _480,
        720: _720,
        1080: _1080
    }
    // console.log(list_360.html())
    return ps;
}

const DownloadMoviebaru = (str) => {
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
    const ps = {
        360: _360,
        480: _480,
        720: _720,
        1080: _1080
    }
    // console.log(list_360.html())
    return ps;
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

const DownloadSeriesBaru = (str) => {
    const $ = cheerio.load(str);
    const info = $('div.infodb');
    const batch = $(info).find('div.dzdesu > h2:contains("BATCH")').parent();


    _360 = [];
    _480 = [];
    _720 = [];
    _1080 = [];
    const list_360 = $(batch).find(' li > strong:contains("360")').parent().find('a');
    list_360.each((i, elem) => {
        _360.push({
            server: $(elem).text(),
            link: $(elem).attr('href')
        })
    })
    const list_480 = $(batch).find(' li > strong:contains("480")').parent().find('a');
    list_480.each((i, elem) => {
        _480.push({
            server: $(elem).text(),
            link: $(elem).attr('href')
        })
    })
    const list_720 = $(batch).find(' li > strong:contains("720")').parent().find('a');
    list_720.each((i, elem) => {
        _720.push({
            server: $(elem).text(),
            link: $(elem).attr('href')
        })
    })
    const list_1080 = $(batch).find(' li > strong:contains("1080")').parent().find('a');
    list_1080.each((i, elem) => {
        _1080.push({
            server: $(elem).text(),
            link: $(elem).attr('href')
        })
    })



    const ps = {
        360: _360,
        480: _480,
        720: _720,
        1080: _1080
    }
    // console.log(list_360.html())
    return ps;
    // console.log(batch.html())

}

const DownloadSeriesLama = (str) => {
    const $ = cheerio.load(str);
    const info = $('div.infodb');
    const batch = $(info).find('strong > div:contains("BATCH")').parent().find('div').eq(2);


    _360 = [];
    _480 = [];
    _720 = [];
    _1080 = [];
    const list_360 = $(batch).find('p:contains("360")').find('a');
    list_360.each((i, elem) => {
        _360.push({
            server: $(elem).text(),
            link: $(elem).attr('href')
        })
    })
    const list_480 = $(batch).find('p:contains("480")').find('a');
    list_480.each((i, elem) => {
        _480.push({
            server: $(elem).text(),
            link: $(elem).attr('href')
        })
    })
    const list_720 = $(batch).find('p:contains("720")').find('a');
    list_720.each((i, elem) => {
        _720.push({
            server: $(elem).text(),
            link: $(elem).attr('href')
        })
    })
    const list_1080 = $(batch).find('p:contains("1080")').find('a');
    list_1080.each((i, elem) => {
        _1080.push({
            server: $(elem).text(),
            link: $(elem).attr('href')
        })
    })
    const ps = {
        360: _360,
        480: _480,
        720: _720,
        1080: _1080
    }
    // console.log(list_360.html())
    return ps;
}

module.exports = { DownloadMovielama, DownloadMoviebaru, DownloadEpisode, DownloadSeriesBaru, DownloadSeriesLama }