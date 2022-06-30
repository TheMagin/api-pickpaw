import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { Filterable } from '@ioc:Adonis/Addons/LucidFilter'
import { compose } from '@ioc:Adonis/Core/Helpers'
import PetFilter from './Filters/PetFilter'

export default class Pet extends compose(BaseModel, Filterable) {
  public static $filter = () => PetFilter

  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public photo: string

  @column()
  public age: number

  @column()
  public gender: string

  @column()
  public additional_information: string

  @column()
  public pet_breed_id: number

  @column()
  public pet_type_id: number

  @column()
  public user_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
