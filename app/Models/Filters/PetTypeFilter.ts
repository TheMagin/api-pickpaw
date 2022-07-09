import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import PetType from 'App/Models/PetType'

export default class PetTypeFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof PetType, PetType>

  q(search: string) {
    this.$query.where((builder) => {
      builder.where('name', 'LIKE', `%${search}%`)
      .orWhere('id', 'LIKE', `%${search}%`)
    })
  }
}
