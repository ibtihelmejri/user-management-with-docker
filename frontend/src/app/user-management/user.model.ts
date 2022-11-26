

export class UserModel {
    public avatar: string;
    public email: string;
    public firstname: string;
    public id: string;
    public lastname: string
    public job: string

  constructor(avatar: string, email: string, firstname: string, id: string, lastname: string, job: string) {
    this.avatar = avatar;
    this.email = email;
    this.firstname = firstname;
    this.id = id;
    this.lastname = lastname;
    this.job = job

  }
}
