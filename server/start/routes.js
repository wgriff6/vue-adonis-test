'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/*Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
}) */

Route.group(() => {
  Route.post('auth/register', 'UserController.register');
  Route.post('auth/login', 'UserController.login');

  //middleware function below allows us to parse a JWT token from the request
  Route.get('projects', 'ProjectController.index').middleware('auth'); //authenticates JWT token before running controller
})
  .prefix('api/v0');