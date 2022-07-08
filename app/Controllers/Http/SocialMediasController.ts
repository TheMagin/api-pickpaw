import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import SocialMedia from 'App/Models/SocialMedia'
import { CreateSchema } from 'App/Validators/SocialMediaValidator'
import { UpdateCreateSchema } from 'App/Validators/SocialMediaValidator'

export default class SocialMediasController {
  public async store({ request, response }: HttpContextContract) {
    const { socialMedia: data } = await request.validate({ schema: CreateSchema })

    const socialMediaModel = new SocialMedia()

    socialMediaModel.account = data.account
    socialMediaModel.user_id = data.idUser
    socialMediaModel.type_social_media_id = data.typeSocialMediaId

    try {
      await socialMediaModel.save()

      return response.created({
        status: true,
        message: 'Se creo la Red Social',
        socialMedia: socialMediaModel.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'No se creo la Red Social',
        error: error,
      })
    }
  }

  public async index({ request, response }: HttpContextContract) {
    const { page = 1, limit = 10, ...filters } = request.qs()

    try {
      const socialMedia = await SocialMedia.filter(filters).paginate(page, limit)

      return response.ok({
        status: true,
        message: 'Redes Sociales listadas correctamente',
        socialMedia: socialMedia.serialize().data,
        meta: socialMedia.serialize().meta,
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al listar las Redes Sociales',
        error: error,
      })
    }
  }

  public async update({ request, params, response }: HttpContextContract) {
    const { socialMedia: data } = await request.validate({ schema: UpdateCreateSchema })

    const socialMediaModel = await SocialMedia.findOrFail(params?.id)

    socialMediaModel.account = data.account ?? socialMediaModel.account
    socialMediaModel.type_social_media_id = data.typeSocialMediaId ?? socialMediaModel.type_social_media_id
    socialMediaModel.user_id = data.idUser ?? socialMediaModel.user_id

    try {
      await socialMediaModel.save()

      return response.ok({
        status: true,
        message: 'Red Social actualizada correctamente',
        socialMediaModel: socialMediaModel.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al actualizar Red Social',
        error,
      })
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const socialMedia = await SocialMedia.findOrFail(params?.id)

      return response.ok({
        status: true,
        message: 'Red Social encontrada correctamente',
        socialMedia: socialMedia.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al obtener Red Social',
        error,
      })
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    const socialMedia = await SocialMedia.findOrFail(params?.id)

    try {
      await socialMedia.delete()

      return response.ok({
        status: true,
        message: 'Red Social eliminada correctamente ',
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al eliminar Red Social',
        error,
      })
    }
  }
}
