var db = require("../models");

module.exports = function(app) {
  app.get("/api/genres/:genres", function(req, res) {
    db.Genres.findAll({
      where: {
        genres: req.params.genres
      },
      limit: 5
    }).then(function(dbGenres) {
      res.json(dbGenres);
    });
  });

  app.get("/api/movies", function(req, res) {
    db.Example.findAll({
      where: {
        //GABRIEL NEED YOU TO ADD ROUTES HERE FOR SURVEY VALUES

      }
    }).then(function(dbMovies) {
      res.json(dbMovies);
    });
  });

};
