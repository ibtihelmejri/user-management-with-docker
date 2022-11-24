import { UserModel } from "../user-management/user.model";

export class UserResModel {
  public page: number;
  public per_page: number;
  public total: number;
  public total_page: number;
  public data: UserModel[];
  constructor(
    page: number,
    per_page: number,
    total: number,
    total_page: number,
    data: UserModel[]
  ) {
    this.page = page;
    this.per_page = per_page;
    this.total = total;
    this.total_page = total_page;
    this.data = data;
  }
}
