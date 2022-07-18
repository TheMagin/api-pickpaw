import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TypePost from 'App/Models/TypePost'
//import { CreateSchema, UpdateCreateSchema } from 'App/Validators/TypePostValidator'

export default class TypePostsController {
    /* public async store({ request, response }: HttpContextContract) {
        const { typePost: data } = await request.validate({ schema: CreateSchema })

        const typePostModel = new TypePost()

        typePostModel.name = data.name

        try {
            await typePostModel.save()

            return response.created({
                status: true,
                message: 'Se creo el Tipo del Post',
                post: typePostModel.serialize(),
            })
        } catch (error) {
            return response.badRequest({
                status: false,
                message: 'No se creo Tipo del Post',
                error: error,
            })
        }
    } */

    public async index({ request, response, bouncer }: HttpContextContract) {
        await bouncer
            .with('RolPolicy')
            .authorize('rol', ['Admin', 'Moderador', 'Usuario', 'Veterinario', 'Fundación'])

        const { page = 1, limit = 10, ...filters } = request.qs()

        try {
            const typePost = await TypePost.filter(filters).paginate(page, limit)

            return response.ok({
                status: true,
                message: 'Tipos de Post listados correctamente',
                typePost: typePost.serialize().data,
                meta: typePost.serialize().meta,
            })
        } catch (error) {
            return response.badRequest({
                status: false,
                message: 'Error al listar los Tipos de Post',
                error: error,
            })
        }
    }

    /* public async update({ request, params, response }: HttpContextContract) {
        const { typePost: data } = await request.validate({ schema: UpdateCreateSchema })

        const typePostModel = await TypePost.findOrFail(params?.id)

        typePostModel.name = data.name ?? typePostModel.name

        try {
            await typePostModel.save()

            return response.ok({
                status: true,
                message: 'Tipo de Post actualizado correctamente',
                typePostModel: typePostModel.serialize(),
            })
        } catch (error) {
            return response.badRequest({
                status: false,
                message: 'Error al actualizar Tipo de Post',
                error,
            })
        }
    } */

    public async show({ params, response, bouncer }: HttpContextContract) {
        await bouncer
            .with('RolPolicy')
            .authorize('rol', ['Admin', 'Moderador', 'Usuario', 'Veterinario', 'Fundación'])

        try {
            const typePost = await TypePost.findOrFail(params?.id)

            return response.ok({
                status: true,
                message: 'Tipo de Post encontrado correctamente',
                typePost: typePost.serialize(),
            })
        } catch (error) {
            return response.badRequest({
                status: false,
                message: 'Error al obtener Tipo de Post',
                error,
            })
        }
    }

    /* public async destroy({ params, response }: HttpContextContract) {
        const typePost = await TypePost.findOrFail(params?.id)

        try {
            await typePost.delete()

            return response.ok({
                status: true,
                message: 'Tipo de Post eliminado correctamente ',
            })
        } catch (error) {
            return response.badRequest({
                status: false,
                message: 'Error al eliminar Tipo de Post',
                error,
            })
        }
    } */
}
