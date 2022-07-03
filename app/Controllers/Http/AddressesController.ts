import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Address from 'App/Models/Address'
import { CreateSchema } from 'App/Validators/AddressValidator'

export default class AddressesController {
  public async store({ request, response }: HttpContextContract) {
    const { address: data } = await request.validate({ schema: CreateSchema })

    const addressModel = new Address()

    addressModel.street = data.street
    addressModel.region_id = data.idRegion
    addressModel.commune_id = data.idComuna
    addressModel.user_id = data.idUser
    try {
      await addressModel.save()

      return response.created({
        status: true,
        address: 'Se creo la Dirección',
        add: addressModel.serialize(),
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'No se creo la Dirección',
        error: error,
      })
    }
  }

  public async index({ request, response }: HttpContextContract) {
    const { page = 1, limit = 10, ...filters } = request.qs()

    try {
      const address = await Address.filter(filters).paginate(page, limit)

      return response.ok({
        status: true,
        message: 'Direcciones listadas correctamente',
        address: address.serialize().data,
        meta: address.serialize().meta,
      })
    } catch (error) {
      return response.badRequest({
        status: false,
        message: 'Error al listar direcciones',
        error: error,
      })
    }
  }
}
