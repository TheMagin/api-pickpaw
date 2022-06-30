import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import PetBreed from 'App/Models/PetBreed'

export default class PetBreedFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof PetBreed, PetBreed>

  q(search: string) {
    this.$query.where((builder) => {
      builder.where('name', 'LIKE', `%${search}%`).orWhere('id', 'LIKE', `%${search}%`)
    })
  }
}
