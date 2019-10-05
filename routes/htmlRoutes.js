var db = require("../models");
var path = require("path");
var gbHelper = require("../helpers/guidebox")

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.render("index");
  });

  //load welcome page
  app.get("/welcome.html", function (req, res) {
    res.render("welcome");
  });

  //load quizpage
  app.get("/quiz", function (req, res) {
    res.render("quiz");
  });

  // Load quiz results
  // LAUGH
  app.get("/survey.html/:laugh_wholesome/:laugh_inappropiate/:laugh_bad_movie/:laugh_in_general",
    function (req, res) {
      db.movies.findAll({
        where: {
          laugh_wholesome: true,
          laugh_inappropiate: true,
          laugh_bad_movie: true,
          laugh_in_general: true
        }
      }).then(function (dbMovies) {
        res.render("quizResults", dbMovies)
      }).catch(function(error) {
        console.log(error);
     });
    });

  // CRY
  app.get("/survey.html/:cry_rough_day/:cry_dumped/:cry_cry/:cry_leave_alone",
    function (req, res) {
      db.movies.findAll({
        where: {
          cry_rough_day: true,
          cry_dumped: true,
          cry_cry: true,
          cry_leave_alone: true
        }
      }).then(function (dbMovies) {
        res.render("quizResults", dbMovies)
      }).catch(function(error) {
        console.log(error);
     });
    });

  // THINK
  app.get("/survey.html/:think_true_story/:think_challenge/:think_small_talk/:think_learn",
    function (req, res) {
      db.movies.findAll({
        where: {
          think_true_story: true,
          think_challenge: true,
          think_small_talk: true,
          think_learn: true
        }
      }).then(function (dbMovies) {
        res.render("quizResults", dbMovies)
      }).catch(function(error) {
        console.log(error);
     });
    });

    // EMOTION
    app.get("/survey.html/:emotion_action/:emotion_tears/:emotion_learn/:emotion_drama",
    function (req, res) {
      db.movies.findAll({
        where: {
          emotion_action: true,
          emotion_tears: true,
          emotion_learn: true,
          emotion_drama: true
        }
      }).then(function (dbMovies) {
        res.render("quizResults", dbMovies)
      }).catch(function(error) {
        console.log(error);
     });
    });

    // AMP
    app.get("/survey.html/:amp_kick_ass/:amp_system/:amp_blow_up/:amp_revenge",
    function (req, res) {
      db.movies.findAll({
        where: {
          amp_kick_ass: true,
          amp_system: true,
          amp_blow_up: true,
          amp_revenge: true
        }
      }).then(function (dbMovies) {
        res.render("quizResults", dbMovies)
      }).catch(function(error) {
        console.log(error);
     });
    });

    // SLEEP
    app.get("/survey.html/:sleep_sweet_dreams/:sleep_weird_dreams/:sleep_scary_dreams/:sleep_surprise_me",
    function (req, res) {
      db.movies.findAll({
        where: {
          sleep_sweet_dreams: true,
          sleep_weird_dreams: true,
          sleep_scary_dreams: true,
          sleep_surprise_me: true
        }
      }).then(function (dbMovies) {
        res.render("quizResults", dbMovies)
      }).catch(function(error) {
        console.log(error);
     });
    });

    // SCARE
    app.get("/survey.html/:scare_ghosts/:scare_monsters/:scare_irl_creeps/:sleep_whatever",
    function (req, res) {
      db.movies.findAll({
        where: {
          scare_ghosts: true,
          scare_monsters: true,
          scare_irl_creeps: true,
          sleep_whatever: true
        }
      }).then(function (dbMovies) {
        res.render("quizResults", dbMovies)
      }).catch(function(error) {
        console.log(error);
     });
    });

  //contact
  app.get("/contact", function (req, res) {
    res.render("contact");
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

  //Show film result info once clicked. Utilizes Guidebox API
  app.get("/showMovie/:id", function (req, res) {
    db.genres
      .findOne({
        where: {
          id: req.params.id
        }
      })
      .then(function (movie) {
        var titleData = {
          dbMovie: movie
        };
        gbHelper.searchMovie(movie.title)
          .then(function (gbMovie) {
            titleData.gbMovie = gbMovie;
            res.render("showMovie", titleData);
          });
      });
  });

  app.post("/api/contact", function(req, res) {
    console.log(req.body);
    db.mail_list.create({
      first_name: req.body.first,
      last_name: req.body.last,
      email: req.body.email
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });

};