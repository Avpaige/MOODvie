var client = require('guidebox');
var keys = require('../config/keys.js');
var axios = require('axios');
var guidebox = keys.guidebox.id;


// Search by movie name
function searchMovie(movie) {
  return new Promise(function (resolve, reject) {
    // resolve({title: "Spiderverse"});
    axios.get('http://api-public.guidebox.com/v2/search?api_key=' + guidebox +
      '&type=movie&field=title&query=' + movie)
      .then(response => {
        var id= response.data.results[0].id;
        showById(id)
        .then(function(guideboxMovie) {
          resolve(guideboxMovie);
        });
        console.log(response.data.results[0]);
        console.log(response.data.results[0].id);
      })
      .catch(error => {
        console.log(error);
      });
  });
}

// Function to show by ID
function showById(id) {
  return new Promise(function (resolve, reject) {
    axios.get('http://api-public.guidebox.com/v2/movies/' + id + '?api_key='
      + guidebox + '&sources=free,subscription,tv_everywhere,purchase')
      .then(response => {
        resolve(response.data)
        let results = response.data.purchase_web_sources;
        for (var i = 0; i < results.length; i++) {
          console.log(results[i].source);
        }
      })
      .catch(error => {
        console.log(error);
      });
  });
}

// Function to show poster
function showPosters() {
      var image = '';
      axios.get('http://api-public.guidebox.com/v2/movies/' + image + '/images?api_key='
        + guidebox + '&filter=posters')
        .then(response => {
          console.log(response.data.results.posters[1]);
        })
        .catch(error => {
          console.log(error);
        });
    }

// Function to show viewing sources
function viewSources() {
      axios.get('http://api-public.guidebox.com/v2/movies?api_key=' + guidebox
        + '&sources=free,subscription,tv_everywhere,purchase')
        .then(response => {
          console.log(response.data.results);
        })
        .catch(error => {
          console.log(error);
        });
    }

module.exports = {
      viewSources: viewSources,
      showPosters: showPosters,
      showById: showById,
      searchMovie: searchMovie
    }
