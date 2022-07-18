import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PetBreed from 'App/Models/PetBreed'
//import { CreateSchema, UpdateCreateSchema } from 'App/Validators/PetBreedValidator'

export default class PetBreedsController {
  /* public async store({ request, response }: HttpContextContract) {
    const { petBreed: data } = await request.validate({ schema: CreateSchema })

    const petBreedModel = new PetBreed()

    petBreedModel.name = data.name
    petBreedModel.pet_type_id = data.idPetType

    try {
      await petBreedModel.save()

      return response.created({
        status: true,
        message: 'Se creo la Raza de la Mascota',
        petBreed: petBreedModel.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'No se creo la Raza de la Mascota',
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
      const petBreed = await PetBreed.filter(filters).paginate(page, limit)

      return response.ok({
        status: true,
        message: 'Tipos de Razas listadas correctamente',
        petBreed: petBreed.serialize().data,
        meta: petBreed.serialize().meta,
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al listar los Tipos de Razas',
        error: error,
      })
    }
  }

  /* public async update({ request, params, response }: HttpContextContract) {
    const { petBreed: data } = await request.validate({ schema: UpdateCreateSchema })

    const petBreedModel = await PetBreed.findOrFail(params?.id)

    petBreedModel.name = data.name ?? petBreedModel.name
    petBreedModel.pet_type_id = data.idPetType ?? petBreedModel.pet_type_id

    try {
      await petBreedModel.save()

      return response.ok({
        status: true,
        message: 'Raza de la Mascota actualizada correctamente',
        petBreedModel: petBreedModel.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al actualizar Raza de Mascota',
        error,
      })
    }
  } */

  public async show({ params, response, bouncer }: HttpContextContract) {
    await bouncer
      .with('RolPolicy')
      .authorize('rol', ['Admin', 'Moderador', 'Usuario', 'Veterinario', 'Fundación'])
      
    try {
      const petBreed = await PetBreed.findOrFail(params?.id)

      return response.ok({
        status: true,
        message: 'Raza de Mascota encontrada correctamente',
        petBreed: petBreed.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al obtener Raza de Mascota',
        error,
      })
    }
  }

  /* public async destroy({ params, response }: HttpContextContract) {
    const petBreed = await PetBreed.findOrFail(params?.id)

    try {
      await petBreed.delete()

      return response.ok({
        status: true,
        message: 'Raza de Mascota eliminado correctamente ',
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al eliminar Raza de Mascota',
        error,
      })
    }
  } */
}
