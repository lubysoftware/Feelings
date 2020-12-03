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

Route.post('/user', 'UserController.store').validator('User')

Route.post('/auth', 'AuthController.store').validator('Auth')

Route.get('/feelings', 'FeelingController.index').middleware(['auth:jwt'])
Route.post('/feelings', 'FeelingController.store').validator('Feeling/store').middleware(['auth:jwt'])
Route.put('/feelings/:id', 'FeelingController.update').validator('Feeling/update').middleware(['auth:jwt'])
