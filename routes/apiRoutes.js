var db = require("../models");
var apiGuide = require("../helpers/guidebox.js")

module.exports = function (app) {
  app.get("/api/genres/:genres", function (req, res) {
    console.log("REQ.BODY");
    console.log(req.params.genres);
    db.genres.findAll({
      where: {
        genre: req.params.genres
      }
    })
      .then(function (dbGenres) {
        apiGuide.searchMovie(dbGenres)
        // console.log(dbGenres);
        res.json(dbGenres);

      });
  });

  // ADD ROUTES HERE FOR SURVEY VALUES
  app.get("/api/surveyResults/laugh/:comedy", function (req, res) {
    db.movies.findAll({
      where: {
        genre: req.params.comedy
      }
    }).then(function (dbMovies) {
      res.json(dbMovies);
      console.log(res);
    });
  });

  app.get("/api/surveyResults/cry/:musical", function (req, res) {
    db.movies.findAll({
      where: {
        genre: req.params.musical
      }
    }).then(function (dbMovies) {
      res.json(dbMovies);
    });
  });

  app.get("/api/surveyResults/learn/:documentary", function (req, res) {
    db.movies.findAll({
      where: {
        genre: req.params.documentary
      }
    }).then(function (dbMovies) {
      res.json(dbMovies);
    });
  });

  app.get("/api/surveyResults/sentimental/:drama", function (req, res) {
    db.movies.findAll({
      where: {
        genre: req.params.drama
      }
    }).then(function (dbMovies) {
      res.json(dbMovies);
    });
  });

  app.get("/api/surveyResults/action/:action", function (req, res) {
    db.movies.findAll({
      where: {
        genre: req.params.action
      }
    }).then(function (dbMovies) {
      res.json(dbMovies);
    });
  });

  app.get("/api/surveyResults/relax/:family", function (req, res) {
    db.movies.findAll({
      where: {
        genre: req.params.family
      }
    }).then(function (dbMovies) {
      res.json(dbMovies);
    });
  });

  app.get("/api/surveyResults/horror/:horror", function (req, res) {
    db.movies.findAll({
      where: {
        genre: req.params.horror
      }
    }).then(function (dbMovies) {
      res.json(dbMovies);
    });

  });
}