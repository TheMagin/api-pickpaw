import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TypeSocialMedia from 'App/Models/TypeSocialMedia'
import { CreateSchema } from 'App/Validators/TypeSocialMediaValidator'

export default class TypeSocialMediasController {
    public async store({ request, response }: HttpContextContract) {
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
    }


    public async index({ request, response }: HttpContextContract) {
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
}
