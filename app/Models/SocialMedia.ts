import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { Filterable } from '@ioc:Adonis/Addons/LucidFilter'
import { compose } from '@ioc:Adonis/Core/Helpers'
import SocialMediaFilter from './Filters/SocialMediaFilter'
import Users from './Users'
import TypeSocialMedia from './TypeSocialMedia'

export default class SocialMedia extends compose(BaseModel, Filterable) {
  public static $filter = () => SocialMediaFilter
  public serializeExtras = true

  @column({ isPrimary: true })
  public id: number

  @column()
  public account: string

  @column()
  public type_social_media_id?: number

  @column()
  public user_id?: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => TypeSocialMedia, { foreignKey: 'type_social_media_id' })
  public typeSocialMedia: BelongsTo<typeof TypeSocialMedia>

  @belongsTo(() => Users, { foreignKey: 'user_id' })
  public user: BelongsTo<typeof Users>
}
