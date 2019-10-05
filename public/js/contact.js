
$("#submit").on("click", function (event) {
    event.preventDefault();
    var newMood = {
        first: $("#firstName").val().trim(),
        last: $("#lastName").val().trim(),
        email: $("#email").val().trim(),
    };

    console.log(newMood)
    $.post("/api/contact", newMood)
           .then(function () {
            $("#form").hide()

            var newDiv = $("<div>");
            newDiv.addClass("thanks");
            newDiv.append("<p>" + "Thanks " + newMood.first + " we'll email you with the latest news!" + "</p>");
           
            $("#contactContainer").prepend(newDiv);
            console.log("success!")
            
        });

    $("#firstName").val("");
    $("#lastName").val("");
    $("#email").val("");
});
