// import 'cerebro-tools';

// const { memoize } = require('cerebro-tools');

const Trakt = require('trakt.tv');
const moment = require('moment');

const trakt = new Trakt({
    client_id: '10d8be9eb555730a1417a9a248a86bbdd04ecde51dc78d538ea9fd0186daa376',
    client_secret: '3deb291414555af33e4dd834220587547b2fc88b6dbe59f551b72025e4a3b0d5',
    redirect_uri: null,
    api_url: null
});

const omdb = 'http://www.omdbapi.com';

module.exports.getFilm = function(id){
    return fetch(`${omdb}/?r=json&plot=full&i=${id}`)
        .then(response => response.json())
        .then(function (result) {
            return trakt.search.id({
                type: 'movie,show',
                id_type: 'imdb',
                id: id,
                extended: 'full'
            }).then(function (response) {
                var data = response[0][response[0].type]
                  , aired = moment(data.first_aired);

                data.first_aired = aired.format('YYYY-MM-DD');
                data.rating = parseFloat(data.rating).toFixed(1);
                data.poster = result.Poster;
                data.director = result.Director;
                data.writer = result.Writer;
                data.actors = result.Actors;

                return data;
            });
        });
};

module.exports.fetchFilms = function(q){
    return trakt.search.text({
        query: q,
        type: 'movie,show'
    }).then(function (response) {
        return response;
    });
};
