import { BaseModelFilter } from '@ioc:Adonis/Addons/LucidFilter'
import { ModelQueryBuilderContract } from '@ioc:Adonis/Lucid/Orm'
import Address from 'App/Models/Address'

export default class AddressFilter extends BaseModelFilter {
  public $query: ModelQueryBuilderContract<typeof Address, Address>

  q(search: string) {
    this.$query.where((builder) => {
      builder.where('street', 'LIKE', `%${search}%`)
      .orWhere('id', 'LIKE', `%${search}%`)
      .orWhere('region_id', 'LIKE', `%${search}%`)
      .orWhere('commune_id', 'LIKE', `%${search}%`)
      .orWhere('user_id', 'LIKE', `%${search}%`)
    })
  }
}
