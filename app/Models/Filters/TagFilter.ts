import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import Tag from 'App/Models/Tag'

export default class TagFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof Tag, Tag>

  q(search: string) {
    this.$query.where((builder) => {
      builder.where('post_id', 'LIKE', `%${search}%`).orWhere('type_tag_id', 'LIKE', `%${search}%`)
    })
  }
}
