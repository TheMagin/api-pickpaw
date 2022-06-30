import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PetType from 'App/Models/PetType'
import { CreateSchema } from 'App/Validators/PetTypeValidator'

export default class PetTypesController {
    public async store({ request, response }: HttpContextContract) {
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
                error: error
            })
        }
    }


    public async index({ request, response }: HttpContextContract) {
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
}
