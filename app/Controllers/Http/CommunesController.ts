import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Commune from 'App/Models/Commune'
import { CreateSchema } from 'App/Validators/CommuneValidator'

export default class CommunesController {
    public async store({ request, response }: HttpContextContract) {
        const { commune: data } = await request.validate({ schema: CreateSchema })

        const communeModel = new Commune()

        communeModel.name = data.name

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
                error: error
            })
        }
    }


    public async index({ request, response }: HttpContextContract) {
        const { page = 1, limit = 10, ...filters } = request.qs()

        try {
            const commune = await Commune.filter(filters).paginate(page, limit)

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
                error: error
            })
        }
    }
}
