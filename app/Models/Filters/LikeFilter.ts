import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import Like from 'App/Models/LikePost'

export default class LikeFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof Like, Like>
  q(search: string) {
    this.$query.where((builder) => {
      builder.where('user_id', 'LIKE', `%${search}%`)
      .orWhere('post_id', 'LIKE', `%${search}%`)
      .orWhere('pet_id', 'LIKE', `%${search}%`)
      .orWhere('type_post_id', 'LIKE', `%${search}%`)
      .orWhere('id', 'LIKE', `%${search}%`)
    })
  }
}
