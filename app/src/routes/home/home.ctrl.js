'use strict'

const users = {
    id : ["woorimIT" ,"나개발", "김팀장"],
    psword : ["1234","2345","3456"]
}

const output = {
    home : (req,res) => {
        res.render("home/index");
    },
    login : (req,res) => {
        res.render('home/login');
    },
}

const process = {
    login : (req,res) => {
        const id = req.body.id;
        const psword = req.body.psword;

        if(users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword) {
                return res.json({
                    success : true,
                })
            }
        }

        return res.json({
            success :false,
            msg: "로그인에 실패하셨습니다",
        })
    }
}

module.exports = {
    output,
    process,
};