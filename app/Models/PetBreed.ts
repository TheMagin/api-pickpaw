import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { Filterable } from '@ioc:Adonis/Addons/LucidFilter'
import { compose } from '@ioc:Adonis/Core/Helpers'
import PetBreedFilter from './Filters/PetBreedFilter'
export default class PetBreed extends compose(BaseModel, Filterable) {
  public static $filter = () => PetBreedFilter

  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public pet_type_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}