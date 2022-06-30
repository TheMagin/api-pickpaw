import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import TypeSocialMedia from 'App/Models/TypeSocialMedia'

export default class TypeSocialMediaFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof TypeSocialMedia, TypeSocialMedia>

  q(search: string) {
    this.$query.where((builder) => {
      builder.where('name', 'LIKE', `%${search}%`).orWhere('id', 'LIKE', `%${search}%`)
    })
  }
}
