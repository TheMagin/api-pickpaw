import { DateTime } from "luxon";
import {
  BaseModel,
  BelongsTo,
  belongsTo,
  column,
  ManyToMany,
  manyToMany,
} from "@ioc:Adonis/Lucid/Orm";
import { Filterable } from "@ioc:Adonis/Addons/LucidFilter";
import PostFilter from "./Filters/PostFilter";
import { compose } from "@ioc:Adonis/Core/Helpers";
import Users from "./Users";
import Pet from "./Pet";
import TypePost from "./TypePost";
import PostPhoto from "./PostPhoto";
export default class Post extends compose(BaseModel, Filterable) {
  public static $filter = () => PostFilter;
  public serializeExtras = true;

  @column({ isPrimary: true })
  public id: number;

  @column()
  public title: string;

  @column()
  public description?: string;

  @column()
  public date_expire?: string;

  @column()
  public status?: string;

  @column()
  public post_state?: boolean;

  @column()
  public user_id?: number;

  @column()
  public pet_id?: number;

  @column()
  public type_post_id?: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Users, { foreignKey: "user_id" })
  public user: BelongsTo<typeof Users>;

  @belongsTo(() => Pet, { foreignKey: "pet_id" })
  public pet: BelongsTo<typeof Pet>;

  @belongsTo(() => TypePost, { foreignKey: "type_post_id" })
  public typePost: BelongsTo<typeof TypePost>;

  @manyToMany(() => PostPhoto, {
    pivotTable: "posts",
    localKey: "id",
    pivotForeignKey: "id",
    relatedKey: "post_id",
    pivotRelatedForeignKey: "id",
  })
  public imagenes: ManyToMany<typeof PostPhoto>;
}
