
$("#submit").on("click", function (event) {
    event.preventDefault();
    var newMood = {
        first: $("#boxTwo").val().trim(),
        last: $("#boxOne").val().trim(),
        email: $("#boxThree").val().trim(),
    };

    console.log(newMood)
    $.post("/api/contact", newMood)
           .then(function () {
            $("#form").hide()

            var newDiv = $("<div>");
            row.addClass("thanks");

            newDiv.append("<p>" + "Thanks " + newMood.first + "we'll keep you updated with latest MOODvie news!" + "</p>");
           
            $("#contactContainer").prepend(newDiv);
            console.log("success!")
            
        });

    $("#boxTwo").val("");
    $("#boxOne").val("");
    $("#boxThree").val("");
});
