import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import Usuario from 'App/Models/Users'

export default class UsuarioFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof Usuario, Usuario>

  q(search: string) {
    this.$query.where((builder) => {
      builder.where('name', 'LIKE', `%${search}%`)
      .orWhere('id', 'LIKE', `%${search}%`)
      .orWhere('email', 'LIKE', `%${search}%`)
      .orWhere('last_name', 'LIKE', `%${search}%`)
      .orWhere('roles_id', 'LIKE', `%${search}%`)
      .orWhere('phone', 'LIKE', `%${search}%`)
    })
  }
}
