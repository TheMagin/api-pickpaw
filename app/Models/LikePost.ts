import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { Filterable } from '@ioc:Adonis/Addons/LucidFilter'
import { compose } from '@ioc:Adonis/Core/Helpers'
import LikeFilter from './Filters/LikeFilter'
import Users from './Users'
import Post from './Post'
import Region from './Region'
import TypePost from './TypePost'

export default class LikePost extends compose(BaseModel, Filterable) {
  public static $filter = () => LikeFilter
  public serializeExtras = true

  @column({ isPrimary: true })
  public id: number

  @column()
  public title?: string

  @column()
  public description?: string

  @column()
  public status?: string

  @column()
  public post_state?: boolean

  @column()
  public user_id?: number

  @column()
  public post_id?: number

  @column()
  public pet_id?: number

  @column()
  public type_post_id?: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Users, { foreignKey: 'user_id' })
  public user: BelongsTo<typeof Users>

  @belongsTo(() => Post, { foreignKey: 'post_id' })
  public post: BelongsTo<typeof Post>

  @belongsTo(() => Region, { foreignKey: 'pet_id' })
  public region: BelongsTo<typeof Region>

  @belongsTo(() => TypePost, { foreignKey: 'type_post_id' })
  public typePost: BelongsTo<typeof TypePost>
}
