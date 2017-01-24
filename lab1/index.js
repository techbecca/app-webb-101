$(document).ready(function () {

    var dataBlob = undefined;

    $.get('./data.json', function (data) {
        dataBlob = data;
    });

    $("#animal-search").bind("input propertychange", function (event) {

        var value = event.target.value;
        var hit = dataBlob[value];

        if (hit !== undefined) {
            // clear the list of past results.
            $("#results").empty();

            // go through each elements in the array for the datablog key
            for (var i = 0; i < hit.length; i++) {
                var currentImage = hit[i];
                var listElement = '<li><img class="img-thumbnail" src="' + currentImage + '" /></li>';
                // adds the list item to the DOM.
                $("#results").append(listElement);
            }
        }
    });
});
