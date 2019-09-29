var db = require("../models");

module.exports = function(app) {
  app.get("/api/genres/:genres", function(req, res) {
    db.genres.findAll({
      }).then(function(dbGenres) {
      console.log(res)
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
