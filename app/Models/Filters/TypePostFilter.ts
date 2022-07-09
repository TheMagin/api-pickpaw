import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import TypePost from 'App/Models/TypeTag'

export default class TypePostFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof TypePost, TypePost>

  q(search: string) {
    this.$query.where((builder) => {
      builder.where('name', 'LIKE', `%${search}%`)
      .orWhere('id', 'LIKE', `%${search}%`)
    })
  }
}
