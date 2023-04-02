"use strict";

$(function() {
    $("#btnLogin").on("click", function(){
        const req = {
            id: $("#id").val(),
            psword: $("#psword").val(),
        };

        // console.log(req);
        // console.log(JSON.stringify(req))

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(req),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.success) {
                    location.href = "/";
                } else {
                    alert(res.msg);
                }
            })
            .catch((err) => {
                console.error("로그인 중 에러 발생");
            })
    });
});
