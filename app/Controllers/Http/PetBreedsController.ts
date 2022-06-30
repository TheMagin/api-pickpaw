import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PetBreed from 'App/Models/PetBreed'
import { CreateSchema } from 'App/Validators/PetBreedValidator'

export default class PetBreedsController {
    public async store({ request, response }: HttpContextContract) {
        const { petBreed: data } = await request.validate({ schema: CreateSchema })

        const petBreedModel = new PetBreed()

        petBreedModel.name = data.name

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
                error: error
            })
        }
    }


    public async index({ request, response }: HttpContextContract) {
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
}
