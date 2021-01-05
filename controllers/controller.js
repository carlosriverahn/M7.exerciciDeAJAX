"use strict";
$(document).ready(function () {
    var joke = $("#joke");
    
    $("#button").click(function (e) { 
        e.preventDefault();
        $.ajax({
            type: "GET",
            url: "http://api.icndb.com/jokes/random",
            data: "PlainObject",
            success: function (data) {
                console.log(data);
                joke.text(data.value.joke);
            }
        });
    });
});