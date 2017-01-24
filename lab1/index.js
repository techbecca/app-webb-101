$(document).ready(function () {
    var dataBlob = {
        kitten: [
            "http://i.giphy.com/3oriO0OEd9QIDdllqo.gif",
            "http://i.giphy.com/iNMz8LF8y3g4.gif",
            "http://i.giphy.com/OmK8lulOMQ9XO.gif",
            "http://i.giphy.com/11s7Ke7jcNxCHS.gif",
            "http://i.giphy.com/IcXFEz3QvEmpG.gif",
            "http://i.giphy.com/yFQ0ywscgobJK.gif"
        ],
        puppy: [
            "http://i.giphy.com/dp7QYhsdgN2Yo.gif",
            "http://i.giphy.com/iNMz8LF8y3g4.gif",
            "http://i.giphy.com/cdTUkj59dLFmg.gif"
        ],
        bunny: [
            "http://i.giphy.com/10xUg8DdgQSs9i.gif",
            "http://i.giphy.com/TT86traJyZRzq.gif",
            "http://i.giphy.com/SeM5SGt3LLKRq.gif",
            "http://i.giphy.com/871qwDxfSemEE.gif"
        ]
    };

    $("#movie-search").bind("input propertychange", function (event) {
        var value = event.target.value;
        var hit = dataBlob[value];

        if (hit !== undefined) {
            // clear the list of past results.
            $("#results").empty();

            // go through each elements in the array for the datablog key
            for (var i = 0; i < hit.length; i++) {
                var currentImage = hit[i];
                var listElement = '<li><img src="' + currentImage + '" /></li>';
                // adds the list item to the DOM.
                $("#results").append(listElement);
            }
        }
    });
});
