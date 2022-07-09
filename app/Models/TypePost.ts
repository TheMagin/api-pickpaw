import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { compose } from '@ioc:Adonis/Core/Helpers'
import { Filterable } from '@ioc:Adonis/Addons/LucidFilter'
import TypePostFilter from './Filters/TypePostFilter'

export default class TypePost extends compose(BaseModel, Filterable) {
  public static $filter = () => TypePostFilter
  public serializeExtras = true

  @column({ isPrimary: true })
  public id: number

  @column({ isPrimary: true })
  public name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
