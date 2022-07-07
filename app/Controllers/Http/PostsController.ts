import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'
import { CreateSchema, UpdateCreateSchema } from 'App/Validators/PostValidator'

export default class PostsController {
  public async store({ request, response }: HttpContextContract) {
    const { post: data } = await request.validate({ schema: CreateSchema })

    const postModel = new Post()

    postModel.title = data.title
    postModel.description = data.description
    postModel.status = data.status
    postModel.date_expire = data.date_expire
    postModel.post_state = false
    postModel.user_id = data.user_id
    postModel.type_post_id = postModel.type_post_id
    postModel.pet_id = postModel.pet_id

    try {
      await postModel.save()

      return response.created({
        status: true,
        message: 'Se creo post',
        post: postModel.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'No se creo post',
        error: error,
      })
    }
  }

  public async update({ request, params, response }: HttpContextContract) {
    const { post: data } = await request.validate({ schema: UpdateCreateSchema })

    const postModel = await Post.findOrFail(params.id)

    postModel.title = data.title ?? postModel.title
    postModel.description = data.description ?? postModel.description
    postModel.status = data.status ?? postModel.status
    postModel.date_expire = data.date_expire ?? postModel.date_expire
    postModel.post_state = data?.post_state ?? postModel.post_state
    postModel.user_id = data.user_id ?? postModel.user_id
    postModel.type_post_id = postModel.type_post_id ?? postModel.type_post_id
    postModel.pet_id = postModel.pet_id ?? postModel.pet_id

    try {
      await postModel.save()

      return response.ok({
        status: true,
        message: 'Post actualizado correctamente',
        postModel: postModel.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al actualizar Post',
        error,
      })
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const post = await Post.findOrFail(params?.id)

      return response.ok({
        status: true,
        message: 'Post encontrado correctamente',
        post: post.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al obtener Post',
        error,
      })
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    const post = await Post.findOrFail(params.id)

    try {
      await post.delete()

      return response.ok({
        status: true,
        message: 'Eliminado correctamente ',
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al eliminar ',
        error,
      })
    }
  }
}
