"use strict"

const output = {
    home: (req, res)=>{
        res.render("home/index");
    },    
    login: (req, res) => {
        res.render("home/login");
    },
};

const users = {
    id: ["leebongkyu", "fenggui", "김팀장"],
    psword: ["1234", "1234", "12345"],
};


const process = {
    login: (req, res) => {
        // console.log(req.body);
        const id = req.body.id,
            psword = req.body.psword;

        // console.log(id, psword);
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx]==psword) {
                return res.json({
                    success: true,
                });
            };
        };

        res.json({
            success: false,
            msg: "로그인에 실패하였습니다"
        })
    }
};


module.exports = {
    output,
    process,
};