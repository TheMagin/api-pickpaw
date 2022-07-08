import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Tag from 'App/Models/Tag'
import { CreateSchema, UpdateCreateSchema } from 'App/Validators/TagValidator'

export default class TagsController {
    public async store({ request, response }: HttpContextContract) {
        const { tag: data } = await request.validate({ schema: CreateSchema })

        const tagModel = new Tag()

        tagModel.post_id = data.idPost
        tagModel.type_tag_id = data.idTypeTag

        try {
            await tagModel.save()

            return response.created({
                status: true,
                message: 'Se creo el Tag',
                tagModel: tagModel.serialize(),
            })
        } catch (error) {
            return response.badRequest({
                status: false,
                message: 'No se creo el Tag',
                error: error,
            })
        }
    }

    public async index({ request, response }: HttpContextContract) {
        const { page = 1, limit = 10, ...filters } = request.qs()

        try {
            const tag = await Tag.filter(filters).paginate(page, limit)

            return response.ok({
                status: true,
                message: 'Tag listados correctamente',
                tag: tag.serialize().data,
                meta: tag.serialize().meta,
            })
        } catch (error) {
            return response.badRequest({
                status: false,
                message: 'Error al listar los Tag',
                error: error,
            })
        }
    }

    public async update({ request, params, response }: HttpContextContract) {
        const { tag: data } = await request.validate({ schema: UpdateCreateSchema })

        const tagModel = await Tag.findOrFail(params?.id)

        tagModel.post_id = data.idPost ?? tagModel.post_id
        tagModel.type_tag_id = data.idTypeTag ?? tagModel.type_tag_id

        try {
            await tagModel.save()

            return response.ok({
                status: true,
                message: 'Tag actualizado correctamente',
                tagModel: tagModel.serialize(),
            })
        } catch (error) {
            return response.badRequest({
                status: false,
                message: 'Error al actualizar Tag',
                error,
            })
        }
    }

    public async show({ params, response }: HttpContextContract) {
        try {
            const tag = await Tag.findOrFail(params?.id)

            return response.ok({
                status: true,
                message: 'Tag encontrado correctamente',
                tag: tag.serialize(),
            })
        } catch (error) {
            return response.badRequest({
                status: false,
                message: 'Error al obtener Tag',
                error,
            })
        }
    }

    public async destroy({ params, response }: HttpContextContract) {
        const tag = await Tag.findOrFail(params?.id)

        try {
            await tag.delete()

            return response.ok({
                status: true,
                message: 'Tag eliminado correctamente ',
            })
        } catch (error) {
            return response.badRequest({
                status: false,
                message: 'Error al eliminar Tag',
                error,
            })
        }
    }
}
