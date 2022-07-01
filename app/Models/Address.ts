import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { Filterable } from '@ioc:Adonis/Addons/LucidFilter'
import { compose } from '@ioc:Adonis/Core/Helpers'
import AddressFilter from './Filters/AddressFilter'

export default class Address extends compose(BaseModel, Filterable) {
  public static $filter = () => AddressFilter

  @column({ isPrimary: true })
  public id: number

  @column()
  public street: string

  @column({ serializeAs: null })
  public region_id?: number

  @column({ serializeAs: null })
  public commune_id?: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
