import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TypeSocialMedia from 'App/Models/TypeSocialMedia'
//import { CreateSchema, UpdateCreateSchema } from 'App/Validators/TypeSocialMediaValidator'

export default class TypeSocialMediasController {
    /* public async store({ request, response }: HttpContextContract) {
        const { typeSocialMedia: data } = await request.validate({ schema: CreateSchema })

        const typeSocialMediaModel = new TypeSocialMedia()

        typeSocialMediaModel.name = data.name

        try {
            await typeSocialMediaModel.save()

            return response.created({
                status: true,
                message: 'Se creo el Tipo de Red Social',
                typeSocialMedia: typeSocialMediaModel.serialize(),
            })
        } catch (error) {
            return response.badRequest({
                status: false,
                message: 'No se creo el Tipo de Red Social',
                error: error
            })
        }
    } */


    public async index({ request, response, bouncer }: HttpContextContract) {
        await bouncer
            .with('RolPolicy')
            .authorize('rol', ['Admin', 'Moderador', 'Usuario', 'Veterinario', 'Fundación'])
            
        const { page = 1, limit = 10, ...filters } = request.qs()

        try {
            const typeSocialMedia = await TypeSocialMedia.filter(filters).paginate(page, limit)

            return response.ok({
                status: true,
                message: 'Tipos de Redes Sociales listadas correctamente',
                typeSocialMedia: typeSocialMedia.serialize().data,
                meta: typeSocialMedia.serialize().meta,
            })
        } catch (error) {
            return response.badRequest({
                status: false,
                message: 'Error al los Tipos de Redes Sociales',
                error: error,
            })
        }
    }

    /* public async update({ request, params, response }: HttpContextContract) {
        const { typeSocialMedia: data } = await request.validate({ schema: UpdateCreateSchema })

        const typeSocialMediaModel = await TypeSocialMedia.findOrFail(params?.id)

        typeSocialMediaModel.name = data.name ?? typeSocialMediaModel.name

        try {
            await typeSocialMediaModel.save()

            return response.ok({
                status: true,
                message: 'Tipo de Red Social actualizado correctamente',
                typeSocialMediaModel: typeSocialMediaModel.serialize(),
            })
        } catch (error) {
            return response.badRequest({
                status: false,
                message: 'Error al actualizar Tipo de Red Social',
                error,
            })
        }
    } */

    public async show({ params, response, bouncer }: HttpContextContract) {
        await bouncer
            .with('RolPolicy')
            .authorize('rol', ['Admin', 'Moderador', 'Usuario', 'Veterinario', 'Fundación'])
            
        try {
            const typeSocialMedia = await TypeSocialMedia.findOrFail(params?.id)

            return response.ok({
                status: true,
                message: 'Tipo de Red Social encontrado correctamente',
                typeSocialMedia: typeSocialMedia.serialize(),
            })
        } catch (error) {
            return response.badRequest({
                status: false,
                message: 'Error al obtener Tipo de Red Social',
                error,
            })
        }
    }

    /* public async destroy({ params, response }: HttpContextContract) {
        const typeSocialMedia = await TypeSocialMedia.findOrFail(params?.id)

        try {
            await typeSocialMedia.delete()

            return response.ok({
                status: true,
                message: 'Tipo de Red Social eliminado correctamente ',
            })
        } catch (error) {
            return response.badRequest({
                status: false,
                message: 'Error al eliminar Tipo de Red Social',
                error,
            })
        }
    } */
}
