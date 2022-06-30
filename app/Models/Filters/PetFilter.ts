import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import Pet from 'App/Models/Pet'

export default class PetFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof Pet, Pet>

  q(search: string) {
    this.$query.where((builder) => {
      builder.where('name', 'LIKE', `%${search}%`).orWhere('id', 'LIKE', `%${search}%`)
    })
  }
}
