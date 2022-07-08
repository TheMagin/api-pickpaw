import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import Post from 'App/Models/Post'

export default class PostFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof Post, Post>
  
  q(search: string) {
    this.$query.where((builder) => {
      builder.where('title', 'LIKE', `%${search}%`).orWhere('description', 'LIKE', `%${search}%`)
    })
  }
}
