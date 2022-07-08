import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import Role from 'App/Models/Role'

export default class RoleFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof Role, Role>

  q(search: string) {
    this.$query.where((builder) => {
      builder.where('name', 'LIKE', `%${search}%`).orWhere('id', 'LIKE', `%${search}%`)
    })
  }
}
