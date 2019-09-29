var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
  });

  //load welcome page
  app.get("/welcome.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/welcome.html"));
  });

  //load results page
  app.get("/results.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/results.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
