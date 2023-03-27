"use strict";

$(function() {
    $("#btnLogin").on("click", function(){
        const req = {
            id: $("#id").val(),
            psword: $("#psword").val(),
        };

        console.log(req);
    });
});
