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

  //GABRIEL NEED YOU TO ADD ROUTES HERE FOR SURVEY VALUES
  app.get("/api/surveyResults/laugh/:", function (req, res)) {
    db.genres.
  }
  app.get("/api/surveyResults/cry/:", function (req, res)) {
    db.genres.
  }
  app.get("/api/surveyResults/learn/:", function (req, res)) {
    db.genres.
  }
  app.get("/api/surveyResults/sentimental/:", function (req, res)) {
    db.genres.
  }
  app.get("/api/surveyResults/action/:", function (req, res)) {
    db.genres.
  }
  app.get("/api/surveyResults/relax/:", function (req, res)) {
    db.genres.
  }
  app.get("/api/surveyResults/horror/:", function (req, res)) {
    db.genres.
  }
  // app.get("/api/movies", function(req, res) {
  //   db.Example.findAll({
  //     where: {


  //     }
  //   }).then(function(dbMovies) {
  //     res.json(dbMovies);
  //   });
  // });

};