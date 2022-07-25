import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { Filterable } from '@ioc:Adonis/Addons/LucidFilter'
import { compose } from '@ioc:Adonis/Core/Helpers'
import AddressFilter from './Filters/AddressFilter'
import Users from './Users'
import Region from './Region'
import Commune from './Commune'

export default class Address extends compose(BaseModel, Filterable) {
  public static $filter = () => AddressFilter
  public serializeExtras = true

  @column({ isPrimary: true })
  public id: number

  @column()
  public street: string

  @column({ serializeAs: null })
  public region_id?: number

  @column({ serializeAs: null })
  public commune_id?: number

  @column({ serializeAs: null })
  public user_id?: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Region, { foreignKey: 'region_id' })
  public region: BelongsTo<typeof Region>

  @belongsTo(() => Commune, { foreignKey: 'commune_id' })
  public commune: BelongsTo<typeof Commune>

  @belongsTo(() => Users, { foreignKey: 'user_id' })
  public user: BelongsTo<typeof Users>
}
