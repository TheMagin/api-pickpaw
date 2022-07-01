import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Region from 'App/Models/Region'
import { CreateSchema } from 'App/Validators/RegionValidator'

export default class RegionsController {
    public async store({ request, response }: HttpContextContract) {
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
                error: error
            })
        }
    }


    public async index({ request, response }: HttpContextContract) {
        const { page = 1, limit = 10, ...filters } = request.qs()

        try {
            const region = await Region.filter(filters).paginate(page, limit)

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
}