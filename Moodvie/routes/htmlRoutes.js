var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

  //load welcome page
  app.get("/welcome.html", function(req, res) {
    res.render("welcome");
  });


  //load genre page
  app.get("/results.html", function(req, res) {
    var genres = [
      {   
        genre: "Bad Ass Women",
        img: "/img/MOODVIEiconsandposter/images.jpeg"
      },
      {
        genre: "Getting Even",
        img: "/img/MOODVIEiconsandposter/images.jpeg"
      },
      {
        genre: "Man vs. Machine",
        img: "/img/MOODVIEiconsandposter/images.jpeg"
      },
      {
        genre: "Alien Invasion",
        img: "/img/MOODVIEiconsandposter/images.jpeg"
      },
      {
        genre: "Dragon's In a Supporting Role",
        img: "/img/MOODVIEiconsandposter/images.jpeg"
      },
      {
          genre: "Cinderella Complex",
          img: "/img/MOODVIEiconsandposter/images.jpeg"
      },
      {
          genre: "Toys That Come to Life",
          img: "/img/MOODVIEiconsandposter/images.jpeg"
      },
      {
          genre: "YA All Day",
          img: "/img/MOODVIEiconsandposter/images.jpeg"
      },
      {
          genre: "Chef it Up",
          img: "/img/MOODVIEiconsandposter/images.jpeg"
      },
      {
         genre: "Professional Social Media Stalkers",
         img: "/img/MOODVIEiconsandposter/images.jpeg"
      },
  ]
    res.render("genres", {genresData:genres});
    
  });


  app.get("/genres/:genreName", function(req, res) {
    res.render("viewGenre");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
