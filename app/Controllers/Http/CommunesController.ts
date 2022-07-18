import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Commune from 'App/Models/Commune'
//import { CreateSchema, UpdateCreateSchema } from 'App/Validators/CommuneValidator'

export default class CommunesController {
  /* public async store({ request, response }: HttpContextContract) {
    const { commune: data } = await request.validate({ schema: CreateSchema })

    const communeModel = new Commune()

    communeModel.name = data.name
    communeModel.region_id = data.idRegion

    try {
      await communeModel.save()

      return response.created({
        status: true,
        message: 'Se creo la Comuna',
        commune: communeModel.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'No se creo la Comuna',
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
      const commune = await Commune.filter(filters).preload('region').paginate(page, limit)

      return response.ok({
        status: true,
        message: 'Comunas listadas correctamente',
        commune: commune.serialize().data,
        meta: commune.serialize().meta,
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al listar comunas',
        error: error,
      })
    }
  }

  public async show({ params, response, bouncer }: HttpContextContract) {
    await bouncer
      .with('RolPolicy')
      .authorize('rol', ['Admin', 'Moderador', 'Usuario', 'Veterinario', 'Fundación'])
      
    try {
      const commune = await Commune.findOrFail(params?.id)

      return response.ok({
        status: true,
        message: 'Comuna encontrado correctamente',
        commune: commune.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al obtener Comuna',
        error,
      })
    }
  }

  /* public async update({ request, params, response }: HttpContextContract) {
    const { commune: data } = await request.validate({ schema: UpdateCreateSchema })

    const communeModel = await Commune.findOrFail(params?.id)

    communeModel.name = data.name ?? communeModel.name
    communeModel.region_id = data.idRegion ?? communeModel.region_id

    try {
      await communeModel.save()

      return response.ok({
        status: true,
        message: 'Comuna actualizada correctamente',
        communeModel: communeModel.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al actualizar Comuna',
        error,
      })
    }
  } */

  /* public async destroy({ params, response }: HttpContextContract) {
    const commune = await Commune.findOrFail(params?.id)

    try {
      await commune.delete()

      return response.ok({
        status: true,
        message: 'Comuna eliminada correctamente ',
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al eliminar Comuna',
        error,
      })
    }
  } */
}
