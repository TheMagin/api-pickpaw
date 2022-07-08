import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Role from 'App/Models/Role'
import { CreateSchema ,UpdateCreateSchema } from 'App/Validators/RoleValidator'

export default class RolesController {
    public async store({ request, response }: HttpContextContract) {
        const { role: data } = await request.validate({ schema: CreateSchema })

        const roleModel = new Role()

        roleModel.name = data.name

        try {
            await roleModel.save()

            return response.created({
                status: true,
                message: 'Se creo el Rol',
                post: roleModel.serialize(),
            })
        } catch (error) {
            return response.badRequest({
                status: false,
                message: 'No se creo post',
                error: error,
            })
        }
    }

    public async index({ request, response }: HttpContextContract) {
        const { page = 1, limit = 10, ...filters } = request.qs()

        try {
            const role = await Role.filter(filters).paginate(page, limit)

            return response.ok({
                status: true,
                message: 'Roles listados correctamente',
                role: role.serialize().data,
                meta: role.serialize().meta,
            })
        } catch (error) {
            return response.badRequest({
                status: false,
                message: 'Error al listar los Roles',
                error: error,
            })
        }
    }

    public async update({ request, params, response }: HttpContextContract) {
        const { role: data } = await request.validate({ schema: UpdateCreateSchema })

        const roleModel = await Role.findOrFail(params?.id)

        roleModel.name = data.name ?? roleModel.name

        try {
            await roleModel.save()

            return response.ok({
                status: true,
                message: 'Rol actualizado correctamente',
                roleModel: roleModel.serialize(),
            })
        } catch (error) {
            return response.badRequest({
                status: false,
                message: 'Error al actualizar Rol',
                error,
            })
        }
    }

    public async show({ params, response }: HttpContextContract) {
        try {
            const role = await Role.findOrFail(params?.id)

            return response.ok({
                status: true,
                message: 'Rol encontrado correctamente',
                role: role.serialize(),
            })
        } catch (error) {
            return response.badRequest({
                status: false,
                message: 'Error al obtener Rol',
                error,
            })
        }
    }

    public async destroy({ params, response }: HttpContextContract) {
        const role = await Role.findOrFail(params?.id)

        try {
            await role.delete()

            return response.ok({
                status: true,
                message: 'Rol eliminado correctamente ',
            })
        } catch (error) {
            return response.badRequest({
                status: false,
                message: 'Error al eliminar Rol',
                error,
            })
        }
    }
}
