import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TypeTag from 'App/Models/TypeTag'
import { CreateSchema, UpdateCreateSchema } from 'App/Validators/TypeTagValidator'

export default class TypeTagsController {
    public async store({ request, response }: HttpContextContract) {
        const { typeTag: data } = await request.validate({ schema: CreateSchema })

        const typeTagModel = new TypeTag()

        typeTagModel.name = data.name

        try {
            await typeTagModel.save()

            return response.created({
                status: true,
                message: 'Se creo el Tipo del Tag',
                post: typeTagModel.serialize(),
            })
        } catch (error) {
            return response.badRequest({
                status: false,
                message: 'No se creo Tipo del Tag',
                error: error,
            })
        }
    }

    public async index({ request, response }: HttpContextContract) {
        const { page = 1, limit = 10, ...filters } = request.qs()

        try {
            const typeTag = await TypeTag.filter(filters).paginate(page, limit)

            return response.ok({
                status: true,
                message: 'Tipos de Tag listados correctamente',
                typeTag: typeTag.serialize().data,
                meta: typeTag.serialize().meta,
            })
        } catch (error) {
            return response.badRequest({
                status: false,
                message: 'Error al listar los Tipos de Tag',
                error: error,
            })
        }
    }

    public async update({ request, params, response }: HttpContextContract) {
        const { typeTag: data } = await request.validate({ schema: UpdateCreateSchema })

        const typeTagModel = await TypeTag.findOrFail(params?.id)

        typeTagModel.name = data.name ?? typeTagModel.name

        try {
            await typeTagModel.save()

            return response.ok({
                status: true,
                message: 'Tipo de Tag actualizado correctamente',
                typeTagModel: typeTagModel.serialize(),
            })
        } catch (error) {
            return response.badRequest({
                status: false,
                message: 'Error al actualizar Tipo de Tag',
                error,
            })
        }
    }

    public async show({ params, response }: HttpContextContract) {
        try {
            const typeTag = await TypeTag.findOrFail(params?.id)

            return response.ok({
                status: true,
                message: 'Tipo de Tag encontrado correctamente',
                typeTag: typeTag.serialize(),
            })
        } catch (error) {
            return response.badRequest({
                status: false,
                message: 'Error al obtener Tipo de Tag',
                error,
            })
        }
    }

    public async destroy({ params, response }: HttpContextContract) {
        const typeTag = await TypeTag.findOrFail(params?.id)

        try {
            await typeTag.delete()

            return response.ok({
                status: true,
                message: 'Tipo de Tag eliminado correctamente ',
            })
        } catch (error) {
            return response.badRequest({
                status: false,
                message: 'Error al eliminar Tipo de Tag',
                error,
            })
        }
    }
}
