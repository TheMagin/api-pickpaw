import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import Usuario from 'App/Models/Users'

export default class UsuarioFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof Usuario, Usuario>

  public q(search: string): void {
    this.$query.where((builder) => {
      builder
        .whereRaw(`upper("id") LIKE '%' || upper(?) || '%'`, [search])
        .orWhereRaw(`upper("email") LIKE '%' || upper(?) || '%'`, [search])
        .orWhereRaw(`upper("name") LIKE '%' || upper(?) || '%'`, [search])
    })
  }
}
