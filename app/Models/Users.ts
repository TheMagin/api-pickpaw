import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column } from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'
import UsersFilter from './Filters/UserFilter'
import { Filterable } from '@ioc:Adonis/Addons/LucidFilter'
import { compose } from '@ioc:Adonis/Core/Helpers'

export default class Users extends compose(BaseModel, Filterable) {
  public static $filter = () => UsersFilter
  public serializeExtras = true

  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: null })
  public password: string

  @column()
  public email: string

  @column()
  public lasta_name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public roles_id?: number

  @column()
  public activate: string

  @column()
  public photo: string

  @column()
  public phone: string

  @column()
  public name: string

  @beforeSave()
  public static async hashPassword(user: Users) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
