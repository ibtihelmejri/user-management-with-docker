

export class UserModel {
    public avatar: string;
    public email: string;
    public firstname: string;
    public id: number;
    public lastname: string

  constructor(avatar: string, email: string, firstname: string, id: number, lastname: string) {
    this.avatar = avatar;
    this.email = email;
    this.firstname = firstname;
    this.id = id;
    this.lastname = lastname;

  }
}
