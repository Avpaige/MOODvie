var db = require("../models");
var path = require("path");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.render("index");
  });

  //load welcome page
  app.get("/welcome.html", function (req, res) {
    res.render("welcome");
  });


  //load genre page
  app.get("/results.html", function (req, res) {
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
    res.render("genres", { genresData: genres });

  });


  app.get("/genres/:genreName", function (req, res) {
    db.genres.findAll({
      where: {
        genre: req.params.genreName
      },
      limit: 6
    })
      .then(function (dbGenres) {
        var renderData = {
          genreMovies: dbGenres
        }

        res.render("viewGenre", renderData);
        console.log(renderData)
      });
  });

 


//Show film result info once clicked
  app.get("/showMovie/:id", function (req, res) {
  db.genres.findOne({
    where: {
     id: req.params.id
     },
  })
    .then(function (titleID) {
      var titleData = {
        id: titleID
      }

      res.render("viewGenre", titleData);
      console.log(titleData)
      console.log(id , "ID IS HERE")
    });
  });
  //   function showById(id) {
  //     var id = '';
  //     axios.get('http://api-public.guidebox.com/v2/movies/' + id + '?api_key='
  //     + guidebox + '&sources=free,subscription,tv_everywhere,purchase')
  //     .then(response => {
  //         let results = response.data.purchase_web_sources;
  //         for (var i = 0; i < results.length; i++) {
  //             console.log(results[i].source);
  //         }
  //     })
  //     .catch(error => {
  //         console.log(error);
  //     });
  // }


 // Render 404 page for any unmatched routes
 app.get("*", function (req, res) {
  res.render("404");
});


};