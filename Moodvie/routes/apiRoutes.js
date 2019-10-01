var db = require("../models");

module.exports = function(app) {
  app.get("/api/genres/:genres", function(req, res) {
    console.log("REQ.BODY");
    console.log(req.params.genres);
    db.genres.findAll({
      where: {
        genre: req.params.genres
      }
    })
        .then(function(dbGenres) {
              console.log(dbGenres);
              res.json(dbGenres);
      
    });
  });

    //       //GABRIEL NEED YOU TO ADD ROUTES HERE FOR SURVEY VALUES
  // app.get("/api/movies", function(req, res) {
  //   db.Example.findAll({
  //     where: {


  //     }
  //   }).then(function(dbMovies) {
  //     res.json(dbMovies);
  //   });
  // });

};
