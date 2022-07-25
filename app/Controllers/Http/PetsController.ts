import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Pet from 'App/Models/Pet'
import { Attachment } from '@ioc:Adonis/Addons/AttachmentLite'
import { UpdateCreateSchema } from 'App/Validators/PetValidator'

export default class PetsController {
  public async createPet({ request, response }: HttpContextContract) {

    const petModel = new Pet()

    const name = request.input('name')
    const age = request.input('age')
    const photo = request.file('photo')!
    const gender = request.input('gender')
    const additional_information = request.input('additional_information')
    const pet_type_id = request.input('pet_type_id')
    const pet_breed = request.input('pet_breed')
    const user_id = request.input('user_id')

    try {
      petModel.photo = await Attachment.fromFile(photo)
      petModel.name = name
      petModel.age = age
      petModel.gender = gender
      petModel.additional_information = additional_information
      petModel.pet_breed_id = pet_breed
      petModel.pet_type_id = pet_type_id
      petModel.user_id = user_id

      await petModel.save()

      return response.created({
        status: true,
        message: 'Se creo la Mascota',
        pet: petModel.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'No se creo la Mascota',
        error: error,
      })
    }
  }

  public async index({ request, response, bouncer }: HttpContextContract) {
    await bouncer
      .with('RolPolicy')
      .authorize('rol', ['Admin', 'Moderador', 'Usuario', 'Veterinario', 'Fundación'])
      
    const { page = 1, limit = 10, ...filters } = request.qs()

    try {
      const pet = await Pet.filter(filters).paginate(page, limit)

      return response.ok({
        status: true,
        message: 'Mascotas listadas correctamente',
        pet: pet.serialize().data,
        meta: pet.serialize().meta,
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al listar las Mascotas',
        error: error,
      })
    }
  }

  public async update({ request, params, response }: HttpContextContract) {
    const { pet: data } = await request.validate({ schema: UpdateCreateSchema })

    const petModel = await Pet.findOrFail(params?.id)

    petModel.name = data.name ?? petModel.name
    petModel.age = data.age ?? petModel.age
    petModel.gender = data.gender ?? petModel.gender
    petModel.additional_information = data?.additionInformation ?? petModel.additional_information
    petModel.pet_breed_id = petModel.pet_breed_id ?? petModel.pet_breed_id
    petModel.pet_type_id = petModel.pet_type_id ?? petModel.pet_type_id
    petModel.pet_type_id = petModel.pet_type_id ?? petModel.pet_type_id

    try {
      await petModel.save()

      return response.ok({
        status: true,
        message: 'Mascota actualizada correctamente',
        petModel: petModel.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al actualizar MAscota',
        error,
      })
    }
  }

  public async updateImagen({ request, response, params }: HttpContextContract) {
    const pet = await Pet.findOrFail(params?.id)
    const photo = request.file('photo', { size: '2mb', extnames: ['jpg', 'png', 'webp'] })

    pet.photo = Attachment.fromFile(photo!)

    try {
      await pet.save()

      return response.ok({
        status: true,
        message: 'Imagen de la Mascota actualizada correctamente',
        usuario: pet.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al actualizar imagen de la Mascota',
        error,
      })
    }
  }

  public async show({ params, response, bouncer }: HttpContextContract) {
    await bouncer
      .with('RolPolicy')
      .authorize('rol', ['Admin', 'Moderador', 'Usuario', 'Veterinario', 'Fundación'])
      
    try {
      const pet = await Pet.findOrFail(params?.id)

      return response.ok({
        status: true,
        message: 'Mascota encontrada correctamente',
        pet: pet.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al obtener Mascota',
        error,
      })
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    const pet = await Pet.findOrFail(params?.id)

    try {
      await pet.delete()

      return response.ok({
        status: true,
        message: 'Mascota eliminada correctamente ',
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al eliminar Mascota',
        error,
      })
    }
  }
}
