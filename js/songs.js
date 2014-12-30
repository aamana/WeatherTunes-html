
// Templates
myApp.songItemTemplate = Template7.compile($$('#song-item-template').html());


// Search Locations
var searchTimeout;
myApp.getSong = function (search) {
    // var query = encodeURIComponent('select * from geo.places where text="' + search + '"');
    var q = 'http://developer.echonest.com/api/v4/song/search?&api_key=ZKGACIZOZVHXH2RUM&bucket=id%3Ardio-US&bucket=song_hotttnesss&bucket=song_currency_rank&bucket=audio_summary&limit=true&start=0&results=10&sort=song_hotttnesss-desc&mode=0&max_valence=0.5&max_energy=0.5&min_danceability=.8&bucket=id:rdio-US&_=1419903958490';
    if (searchTimeout) clearTimeout(searchTimeout);
    $$('.popup .preloader').show();
    searchTimeout = setTimeout(function () {
        $$.get(q, function (results) {
            var html = '';
            results = JSON.parse(results);
            $$('.popup .preloader').hide();
            // if (results.query.count > 0) {
                var songs = results.response.songs;
                html = myApp.songItemTemplate(songs);
            // }
            console.log(html + 'sss');
            $$('.songs-list ol').html(html);
            $$('.songs-list ul').html('<li>lalalalal</li>');
        });
    }, 300);
};
// $$('.popup input[type="text"]').on('change keyup keydown', function () {
    myApp.getSong();

