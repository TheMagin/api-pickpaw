import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import LikePost from 'App/Models/LikePost'
import { CreateSchema, UpdateCreateSchema } from 'App/Validators/LikePostValidator'

export default class LikePostsController {
    public async store({ request, response }: HttpContextContract) {
        const { likePost: data } = await request.validate({ schema: CreateSchema })

        const likePostModel = new LikePost()

        likePostModel.user_id = data.idUser
        likePostModel.post_id = data.idPost
        likePostModel.pet_id = data.idPet
        likePostModel.type_post_id = data.idTypePost

        try {
            await likePostModel.save()

            return response.created({
                status: true,
                message: 'Se creo el Me Gusta del Post',
                likePostModel: likePostModel.serialize(),
            })
        } catch (error) {
            return response.badRequest({
                status: false,
                message: 'No se creo Me Gusta del Post',
                error: error,
            })
        }
    }

    public async index({ request, response }: HttpContextContract) {
        const { page = 1, limit = 10, ...filters } = request.qs()

        try {
            const likePost = await LikePost.filter(filters).paginate(page, limit)

            return response.ok({
                status: true,
                message: 'Me Gusta del Post listados correctamente',
                likePost: likePost.serialize().data,
                meta: likePost.serialize().meta,
            })
        } catch (error) {
            return response.badRequest({
                status: false,
                message: 'Error al listar los Me Gusta del Post',
                error: error,
            })
        }
    }

    public async update({ request, params, response }: HttpContextContract) {
        const { likePost: data } = await request.validate({ schema: UpdateCreateSchema })

        const likePostModel = await LikePost.findOrFail(params?.id)

        likePostModel.user_id = data.idUser ?? likePostModel.user_id
        likePostModel.post_id = data.idPost ?? likePostModel.post_id
        likePostModel.pet_id = data.idPet ?? likePostModel.pet_id
        likePostModel.type_post_id = data.idTypePost ?? likePostModel.type_post_id

        try {
            await likePostModel.save()

            return response.ok({
                status: true,
                message: 'Me Gusta del Post actualizado correctamente',
                likePostModel: likePostModel.serialize(),
            })
        } catch (error) {
            return response.badRequest({
                status: false,
                message: 'Error al actualizar Me Gusta del Post',
                error,
            })
        }
    }

    public async show({ params, response }: HttpContextContract) {
        try {
            const likePost = await LikePost.findOrFail(params?.id)

            return response.ok({
                status: true,
                message: 'Me Gusta del Post encontrado correctamente',
                likePost: likePost.serialize(),
            })
        } catch (error) {
            return response.badRequest({
                status: false,
                message: 'Error al obtener Me Gusta del Post',
                error,
            })
        }
    }

    public async destroy({ params, response }: HttpContextContract) {
        const likePost = await LikePost.findOrFail(params?.id)

        try {
            await likePost.delete()

            return response.ok({
                status: true,
                message: 'Me Gusta del Post eliminado correctamente ',
            })
        } catch (error) {
            return response.badRequest({
                status: false,
                message: 'Error al eliminar Me Gusta del Post',
                error,
            })
        }
    }
}
