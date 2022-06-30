import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Pet from 'App/Models/Pet'
import { CreateSchema } from 'App/Validators/PetValidator'

export default class PetsController {
    public async store({ request, response }: HttpContextContract) {
        const { pet: data } = await request.validate({ schema: CreateSchema })

        const petModel = new Pet()

        petModel.name = data.name

        try {
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
                error: error
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
