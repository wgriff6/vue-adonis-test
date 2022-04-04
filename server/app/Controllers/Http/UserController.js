'use strict'

const User = use('App/Models/User'); //grabs app/model/user.js file

class UserController {

    async login({request, auth }) {
        const { email, password } = request.all();
        const token = await auth.attempt(email, password);
        return token;
    }

    async register({request}) {
        const { email, password } = request.all();
        //print out to check
        //console.log(email, password)
        await User.create({
            email,
            password,
            username: email,
        });
        //return user; --Old way we returned (had const user = await... along with it)
        return this.login(...arguments);
    }
}

module.exports = UserController
