import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import Commune from 'App/Models/Commune'

export default class CommuneFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof Commune, Commune>

  q(search: string) {
    this.$query.where((builder) => {
      builder.where('name', 'LIKE', `%${search}%`)
      .orWhere('id', 'LIKE', `%${search}%`)
      .orWhere('region_id', 'LIKE', `%${search}%`)
    })
  }
}
