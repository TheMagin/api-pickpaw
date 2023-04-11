import { DateTime } from 'luxon'
import {
  BaseModel,
  BelongsTo,
  belongsTo,
  column,
  ManyToMany,
  manyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import { Filterable } from '@ioc:Adonis/Addons/LucidFilter'
import { compose } from '@ioc:Adonis/Core/Helpers'
import PetFilter from './Filters/PetFilter'
import { attachment, AttachmentContract } from '@ioc:Adonis/Addons/AttachmentLite'
import Post from './Post'

export default class PostPhoto extends compose(BaseModel, Filterable) {
  public static $filter = () => PetFilter
  public serializeExtras = true

  @column({ isPrimary: true })
  public id: number

  @attachment({ disk: 's3', preComputeUrl: true })
  public photo?: AttachmentContract

  @column()
  public post_id?: number
  @column()
  public id_post?: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Post, { foreignKey: 'post_id' })
  public photos: BelongsTo<typeof Post>

  @manyToMany(() => Post, {
    pivotTable: 'post_photos',
    pivotForeignKey: 'id',
    pivotRelatedForeignKey: 'id',
  })
  public post: ManyToMany<typeof Post>
}
