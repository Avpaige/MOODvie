var client = require('guidebox');
var keys = require('./keys.js');

var guidebox = (keys.guidebox);

// Function to show poster
function showPoster() {
    var movieId = ''
    $.ajax({
        query: 'http://api-public.guidebox.com/v2/movies/' + movieId + '/images?api_key=' + 
            guidebox + '&filter=posters',
        method: 'GET'
    }).then(function(response){
        console.log(response);
    });
}

// Function to show viewing sources
function viewSources() {
    $.ajax({
        query: 'http://api-public.guidebox.com/v2/movies?api_key=' + guidebox + '&sources=free,subscription',
        method: 'GET'
    }).then(function(responses) {
        console.log(responses);
    });
}

module.exports(client);