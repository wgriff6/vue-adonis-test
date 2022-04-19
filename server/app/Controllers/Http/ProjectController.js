'use strict'

const Project = use('App/Models/Project');
const AuthorizationService = use('App/Services/AuthorizationService');
class ProjectController {
   async index({ auth }) {
        const user = await auth.getUser();
        console.log(user.id);
        return await user.projects().fetch();
        /*return {
            message: 'hello world',
        }*/
    }
    async create({auth, request }) {
        const user = await auth.getUser();
        const { title } = request.all();
        const project = new Project();
        // project.title = testTitle; one way to populate title
        project.fill({ //another way
            title, //replace with testTitle at least once for testing
        });
        //associate project with created project
        await user.projects().save(project);
        return project;
    }

    async destroy({auth, request, params}) { //params gives query parameters
        //fetch user that sent request
        const user = await auth.getUser();
        //get project id we declare in route.js
        const {id} = params;
        //fetch project associated with the id
        const project = await Project.find(id);
        //check if user is authourized to delete
        /*if (project.user_id !== user.id) {
            return response.status(403); //status 403 is auth error status
        }*/
        AuthorizationService.verifyPermission(project, user); //todo: test this and the if statement above
        await project.delete();
        return project;
    }
}

module.exports = ProjectController
