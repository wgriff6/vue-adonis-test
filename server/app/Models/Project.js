'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Project extends Model {
    user() {
        return this.belongsTo('App/Models/User'); //this just says that a project belongs to a user and that a user has many projects
        //allows us to easily look up data both ways, depending on what lucid model we have
    }
}

module.exports = Project
