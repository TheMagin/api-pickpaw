import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import SocialMedia from 'App/Models/SocialMedia'

export default class SocialMediaFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof SocialMedia, SocialMedia>

  q(search: string) {
    this.$query.where((builder) => {
      builder.where('account', 'LIKE', `%${search}%`)
      .orWhere('id', 'LIKE', `%${search}%`)
      .orWhere('type_social_media_id', 'LIKE', `%${search}%`)
      .orWhere('user_id', 'LIKE', `%${search}%`)
    })
  }
}
