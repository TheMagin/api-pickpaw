import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { Filterable } from '@ioc:Adonis/Addons/LucidFilter'
import { compose } from '@ioc:Adonis/Core/Helpers'
import LikeFilter from './Filters/LikeFilter'

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
}
