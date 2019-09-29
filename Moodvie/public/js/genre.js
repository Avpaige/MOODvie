$(document).ready(function() {
$("#results").hide();
$("#women").on("click", getBadAss);
$("#even").on("click", getEven);
// $("#dragon").on("click", getDragons);
// $("#stalker").on("click", getDragons);
// $("#chef").on("click", getChef);
// $("#toys").on("click", getDragons);


$("#closeBtn").on("click", closeBtn);

function closeBtn(){
    $("#results").hide();
    $("#genreDiv").show();
    $(".genreData").empty();
}

function getBadAss(){
    $("#genreDiv").hide();
 $.get("/api/genres/Bad Ass Women", function(data) {
        console.log(data)
    for (var i=0; i<data.length; i++){ 
        var newDiv = $("<div>");
        newDiv.addClass("genreData");
        var textDiv = $("<div id='resultsText'>");
        $(textDiv).append(data[i].title);
        $(newDiv).append(textDiv);
        $(newDiv).show();
        $("#results").append(newDiv);
        $("#results").show();
            };
        })
    };

function getEven(){
    $("#genreDiv").hide();
 $.get("/api/genres/Getting Even", function(data) {
        console.log(data)
    for (var i=0; i<data.length; i++){ 
        var newDiv = $("<div>");
        newDiv.addClass("genreData");
        var textDiv = $("<div id='resultsText'>");
        $(textDiv).append(data[i].title);
        $(newDiv).append(textDiv);
        $(newDiv).show();
        $("#results").append(newDiv);
        $("#results").show();
           };
        })
    };
})
