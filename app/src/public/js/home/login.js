"use strict";

$(function() {
    $("#btnLogin").on("click", function(){
        const req = {
            id: $("#id").val(),
            psword: $("#psword").val(),
        };

        console.log(req);
        console.log(JSON.stringify(req))

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(req),
        });
    });
});
