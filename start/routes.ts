/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import HealthCheck from '@ioc:Adonis/Core/HealthCheck'
import Route from '@ioc:Adonis/Core/Route'
import Users from 'App/Models/Users'

Route.get('/', async () => {
  return { api: 'Dinimalist' }
})

Route.get('health', async ({ response }) => {
  const report = await HealthCheck.getReport()

  return report.healthy ? response.ok(report) : response.badRequest(report)
})
//Route users
Route.post('/auth', 'UsersController.login')
Route.post('/auth/token', 'UsersController.loginToken')
Route.post('/logout', 'UsersController.logout')
Route.resource('/user', 'UsersController').where('id', Route.matchers.number()).apiOnly()
Route.post('/new-password-token', 'UsersController.createNewPasswordToken')
Route.post('/new-user-token', 'UsersController.crateUserToken')
Route.put('/user/image/:id', 'UsersController.updateImagen')

//Route region
Route.resource('/region', 'RegionsController')

//Route comuna
Route.resource('/commune', 'CommunesController')

//Route address
Route.resource('/address', 'AddressesController')

//Route petbredd
Route.resource('/pet/breed', 'PetBreedsController')

//Route pet type
Route.resource('/pet/type', 'PetTypesController')

//Route pet
Route.resource('/pet', 'PetsController')

//Route social media
Route.resource('/social/media', 'SocialMediasController')

//Route type social media
Route.resource('/type/social/media', 'TypeSocialMediasController')

//Route post
Route.resource('/role', 'RolesController')

//Route post
Route.resource('/type/tag', 'TypeTagsController')

//Route post
Route.resource('/tag', 'TagsController')

//Route post
Route.resource('/post', 'PostsController')

//Route post
Route.resource('/type/post', 'TypePostsController')

//Route post
Route.resource('/like/post', 'LikePostsController')

Route.get('/google/redirect', async ({ ally }) => {
  return ally.use('google').redirect()
})

Route.get('/google/callback', async ({ ally, auth, response }) => {
  const google = ally.use('google')
  const googleUser = await google.user()

  const user = await Users.firstOrCreate(
    {
      email: googleUser.email,
    },
    {
      name: googleUser.name,
      remember_me_token: googleUser.token.token,
      last_name: googleUser.original.family_name,
    }
  )

  await auth.use('api').login(user)
  return response.redirect('https://dev.pickpaw.cl/explorer')
})
