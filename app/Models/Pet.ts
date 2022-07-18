import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { Filterable } from '@ioc:Adonis/Addons/LucidFilter'
import { compose } from '@ioc:Adonis/Core/Helpers'
import PetFilter from './Filters/PetFilter'
import { attachment, AttachmentContract } from '@ioc:Adonis/Addons/AttachmentLite'
import PetBreed from './PetBreed'
import PetType from './PetType'
import Users from './Users'
export default class Pet extends compose(BaseModel, Filterable) {
  public static $filter = () => PetFilter
  public serializeExtras = true

  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @attachment({ disk: 's3', preComputeUrl: true })
  public photo?: AttachmentContract

  @column()
  public age?: number

  @column()
  public gender?: string

  @column()
  public additional_information?: string

  @column()
  public pet_breed_id?: number

  @column()
  public pet_type_id?: number

  @column()
  public user_id?: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => PetBreed, { foreignKey: 'pet_breed' })
  public petBreed: BelongsTo<typeof PetBreed>

  @belongsTo(() => PetType, { foreignKey: 'pet_type_id' })
  public petType: BelongsTo<typeof PetType>

  @belongsTo(() => Users, { foreignKey: 'user_id' })
  public user: BelongsTo<typeof Users>
}
