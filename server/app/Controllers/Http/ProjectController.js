'use strict'

class ProjectController {
   async index({ auth }) {
        const user = await auth.getUser();
        console.log(user);
        return {
            message: 'hello world',
        }
    }
}

module.exports = ProjectController
