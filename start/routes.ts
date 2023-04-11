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

import HealthCheck from "@ioc:Adonis/Core/HealthCheck";
import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async () => {
  return { api: "Dinimalist" };
});

Route.get("health", async ({ response }) => {
  const report = await HealthCheck.getReport();

  return report.healthy ? response.ok(report) : response.badRequest(report);
});
//Route users
Route.post("/auth", "UsersController.login");
Route.post("/auth/token", "UsersController.loginToken");
Route.post("/logout", "UsersController.logout");

Route.post("/user", "UsersController.createUser");
Route.resource("/auth/user", "UsersController")
  .where("id", Route.matchers.number())
  .middleware({ "*": "auth" })
  .apiOnly();
Route.post("/new-password-token", "UsersController.createNewPasswordToken");
Route.post("/new-user-token", "UsersController.crateUserToken");
Route.put("/user/image/:id", "UsersController.updateImagen");

//Route region
Route.resource("/region", "RegionsController").middleware({ "*": "auth" });

//Route comuna
Route.resource("/commune", "CommunesController").middleware({ "*": "auth" });

//Route address
Route.resource("/address", "AddressesController").middleware({
  "*": "auth",
});
//Route petbredd
Route.resource("/pet/breed", "PetBreedsController").middleware({ "*": "auth" });

//Route pet type
Route.resource("/pet/type", "PetTypesController").middleware({ "*": "auth" });

//Route pet
Route.resource("/pet", "PetsController").middleware({ "*": "auth" });

//Route social media
Route.resource("/social/media", "SocialMediasController").middleware({
  "*": "auth",
});

//Route type social media
Route.resource("/type/social/media", "TypeSocialMediasController").middleware({
  "*": "auth",
});

//Route post
Route.resource("/role", "RolesController");

//Route post
Route.resource("/type/tag", "TypeTagsController").middleware({ "*": "auth" });

//Route post
Route.resource("/tag", "TagsController").middleware({ "*": "auth" });

//Route post
Route.resource("/post", "PostsController").middleware({
  "*": "auth",
});

Route.post("/post/imagen", "PostsController.postImagen");

//Route post
Route.resource("/type/post", "TypePostsController").middleware({ "*": "auth" });

//Route post
Route.resource("/like/post", "LikePostsController").middleware({ "*": "auth" });

Route.get("/google/redirect", "AuthSocialsController.redirect");

Route.get("/google/callback", "AuthSocialsController.call");
