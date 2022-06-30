import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { Filterable } from '@ioc:Adonis/Addons/LucidFilter'
import { compose } from '@ioc:Adonis/Core/Helpers'
import SocialMediaFilter from './Filters/SocialMediaFilter'

export default class SocialMedia extends compose(BaseModel, Filterable) {
  public static $filter = () => SocialMediaFilter

  @column({ isPrimary: true })
  public id: number

  @column()
  public account: string

  @column()
  public type_social_media_id: number

  @column()
  public user_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
