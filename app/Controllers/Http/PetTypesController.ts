import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PetType from 'App/Models/PetType'
//import { CreateSchema, UpdateCreateSchema } from 'App/Validators/PetTypeValidator'

export default class PetTypesController {
  /* public async store({ request, response }: HttpContextContract) {
    const { petType: data } = await request.validate({ schema: CreateSchema })

    const petTypeModel = new PetType()

    petTypeModel.name = data.name

    try {
      await petTypeModel.save()

      return response.created({
        status: true,
        message: 'Se creo el Tipo de Mascota',
        petType: petTypeModel.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'No se creo el Tipo de Mascota',
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
      const petType = await PetType.filter(filters).paginate(page, limit)

      return response.ok({
        status: true,
        message: 'Tipos de Mascotas listadas correctamente',
        petType: petType.serialize().data,
        meta: petType.serialize().meta,
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al listar Tipos de Mascotas',
        error: error,
      })
    }
  }

  /* public async update({ request, params, response }: HttpContextContract) {
    const { petType: data } = await request.validate({ schema: UpdateCreateSchema })

    const petTypeModel = await PetType.findOrFail(params?.id)

    petTypeModel.name = data.name ?? petTypeModel.name

    try {
      await petTypeModel.save()

      return response.ok({
        status: true,
        message: 'Tipo de Mascota actualizado correctamente',
        petTypeModel: petTypeModel.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al actualizar Tipo de Mascota',
        error,
      })
    }
  } */

  public async show({ params, response, bouncer }: HttpContextContract) {
    await bouncer
      .with('RolPolicy')
      .authorize('rol', ['Admin', 'Moderador', 'Usuario', 'Veterinario', 'Fundación'])

    try {
      const petType = await PetType.findOrFail(params?.id)

      return response.ok({
        status: true,
        message: 'Tipo de Mascota encontrado correctamente',
        petType: petType.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al obtener Tipo de Mascota',
        error,
      })
    }
  }

  /* public async destroy({ params, response }: HttpContextContract) {
    const petType = await PetType.findOrFail(params?.id)

    try {
      await petType.delete()

      return response.ok({
        status: true,
        message: 'Tipo de Mascota eliminado correctamente ',
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al eliminar Tipo de Mascota',
        error,
      })
    }
  } */
}
