$(document).ready(function () {


  function closeBtn() {
    $("#results").hide();
    $("pageBtns").hide();
    $("#genreDiv").show();
    $(".genreData").empty();
  }

  var genres = [
    {
      genre: "Bad Ass Women",
      img: "../img/MOODVIEiconsandposter/images.jpeg"
    },
    {
      genre: "Getting Even",
      img: "../img/MOODVIEiconsandposter/images.jpeg"
    },
    {
      genre: "Man vs. Machine",
      img: "../img/MOODVIEiconsandposter/images.jpeg"
    },
    {
      genre: "Alien Invasion",
      img: "../img/MOODVIEiconsandposter/images.jpeg"
    },
    {
      genre: "Dragon's In a Supporting Role",
      img: "../img/MOODVIEiconsandposter/images.jpeg"
    },
    {
      genre: "Cinderella Complex",
      img: "../img/MOODVIEiconsandposter/images.jpeg"
    },
    {
      genre: "Toys That Come to Life",
      img: "../img/MOODVIEiconsandposter/images.jpeg"
    },
    {
      genre: "YA All Day",
      img: "../img/MOODVIEiconsandposter/images.jpeg"
    },
    {
      genre: "Chef it Up",
      img: "../img/MOODVIEiconsandposter/images.jpeg"
    },
    {
      genre: "Professional Social Media Stalkers",
      img: "../img/MOODVIEiconsandposter/images.jpeg"
    },
  ]



  $("#results").hide();
  $("#pageBtns").hide();
  $(".row").on("click", searchGenres);
  $("#closeBtn").on("click", closeBtn);

  function getGenres() {
    for (var i = 0; i < genres.length; i++) {
      var newDiv = $("<div>");
      newDiv.addClass("row justify-content-between");
      newDiv.addClass("col-4 text-center");
      newDiv.addClass("genrePassed");
      var img = $("<img>");
      img.addClass("poster");
      img.attr("src", genres[i].img);
      var header = $("<p>");
      header.addClass("text-light genreText");
      newDiv.append(header);
      newDiv.append(img);
      header.text(genres[i].genre);
      newDiv.attr("data-genre", genres[i].genre);
      $("#genreDiv").append(newDiv);
      //   console.log(genres[i].img, "here's the image");
    }
  }
  function searchGenres() {
    $("#genreDiv").hide();
    var search = $(this).attr("data-genre");
    $.get("/api/genres/" + search, function (data) {
      for (var i = 0; i < data.length; i++) {
        console.log(data);
        var titles = [];
        console.log("title results", titles)
        titles.push(data[i].title)
        var newDiv = $("<div>");
        newDiv.addClass("genreData");
        var textDiv = $("<div id='resultsText'>");
        $(textDiv).append(data[i].title);
        $(newDiv).append(textDiv);
        $(newDiv).show();
        $("#results").append(newDiv);
        $("#results").show();
        $("#pageBtns").show();

        // for (var i = 0; i < titles.length; i++) {
        //   var movie = titles[i].length;
        //   showPosters(movie)
        //   }
      };
    })
  };
});
