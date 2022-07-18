import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { compose } from '@ioc:Adonis/Core/Helpers'
import { Filterable } from '@ioc:Adonis/Addons/LucidFilter'
import TagFilter from './Filters/TagFilter'
import Post from './Post'
import TypeTag from './TypeTag'

export default class Tag extends compose(BaseModel, Filterable) {
  public static $filter = () => TagFilter
  public serializeExtras = true

  @column({ isPrimary: true })
  public id: number

  @column()
  public post_id?: number

  @column()
  public type_tag_id?: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Post, { foreignKey: 'post_id' })
  public post: BelongsTo<typeof Post>

  @belongsTo(() => TypeTag, { foreignKey: 'type_tag_id' })
  public typeTag: BelongsTo<typeof TypeTag>
}
