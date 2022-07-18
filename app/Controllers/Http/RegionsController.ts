import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Region from 'App/Models/Region'
//import { CreateSchema, UpdateSchema } from 'App/Validators/RegionValidator'

export default class RegionsController {
  /* public async store({ request, response }: HttpContextContract) {
    const { region: data } = await request.validate({ schema: CreateSchema })

    const regionModel = new Region()

    regionModel.name = data.name

    try {
      await regionModel.save()

      return response.created({
        status: true,
        message: 'Se creo la Región',
        region: regionModel.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'No se creo la Región',
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
      const region = await Region.filter(filters).preload('comune').paginate(page, limit)

      return response.ok({
        status: true,
        message: 'Regiones listadas correctamente',
        region: region.serialize().data,
        meta: region.serialize().meta,
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al listar regiones',
        error: error,
      })
    }
  }

  public async show({ params, response, bouncer }: HttpContextContract) {
    await bouncer
      .with('RolPolicy')
      .authorize('rol', ['Admin', 'Moderador', 'Usuario', 'Veterinario', 'Fundación'])
      
    try {
      const region = await Region.findOrFail(params?.id)

      return response.ok({
        status: true,
        message: 'Región encontrada correctamente',
        region: region.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al obtener la Región',
        error,
      })
    }
  }

  /* public async update({ request, params, response }: HttpContextContract) {
    const { region: data } = await request.validate({ schema: UpdateSchema })

    const regionModel = await Region.findOrFail(params?.id)

    regionModel.name = data.name ?? regionModel.name

    try {
      await regionModel.save()

      return response.ok({
        status: true,
        message: 'Región actualizado correctamente',
        regionModel: regionModel.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al actualizar Región',
        error,
      })
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    const region = await Region.findOrFail(params?.id)

    try {
      await region.delete()

      return response.ok({
        status: true,
        message: 'Región eliminado correctamente ',
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al eliminar Región',
        error,
      })
    }
  } */
}
