"use strict";

class UserStorage {

    //static으로 지정하면 객체를 생성하지 않고 클래스 자체로 접근 가능
    //# 붙히면 은닉화
    static #users = {
        id: ["leebongkyu", "fenggui", "김팀장"],
        psword: ["1234", "1234", "12345"],
        name: ["이봉규","펑꾸이","김정민"],
    };

    //메소드에 ...이 붙으면 가변적
    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] =  users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;
