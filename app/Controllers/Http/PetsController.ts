import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Pet from 'App/Models/Pet'

export default class PetsController {
  public async store({ request, response }: HttpContextContract) {
    //const { pet: data } = await request.validate({ schema: CreateSchema })

    const petModel = new Pet()

    //petModel.name = data.name

    const name = request.input('name')
    const age = request.input('age')

    const gender = request.input('gender')
    const additional_information = request.input('additional_information')
    const pet_type_id = request.input('pet_type_id')
    const pet_breed = request.input('pet_breed')
    const user_id = request.input('user_id')

    try {
      petModel.name = name
      petModel.age = age
      petModel.gender = gender
      petModel.additional_information = additional_information
      petModel.pet_breed = pet_breed
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

  public async index({ request, response }: HttpContextContract) {
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
}
